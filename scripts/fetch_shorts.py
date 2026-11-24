#!/usr/bin/env python3
"""Scoop - récupère les Shorts YouTube récents de rédactions fiables.

Équivalent de fetch-shorts.ps1, pour la routine cloud (Linux).
Usage : python3 scripts/fetch_shorts.py [heures]   (36 par défaut)
Sortie : scripts/shorts-today.txt
La playlist "UUSH" + ID de chaîne (sans "UC") ne contient que les Shorts de la chaîne.
"""
import datetime
import pathlib
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET

CHANNELS = [
    ("franceinfo", "UCO6K_kkdP-lnSCiO3tPx7WA"),
    ("Le Monde", "UCYpRDnhk5H8h16jpS84uqsA"),
    ("HugoDécrypte", "UCAcAnMF0OrCtUep3Y4M-ZPw"),
    ("France 24", "UCCCPCZNChQdGa9EkATeye4g"),
    ("AFP", "UCckz6n8QccTd6K_xdwKqa0A"),
    ("Brut", "UCSKdvgqdnj72_SLggp7BDTg"),
    ("Le Figaro", "UCCDz_XYeKWd0OIyjp95dqyQ"),
    ("Libération", "UC9x4Iyu-D257P0P-VDRwSzw"),
    ("TV5MONDE Info", "UCzKH70qfN_yuXq3s91fdwmg"),
    ("RFI", "UCm4fSpMpPIZ9z6KHoezLUAg"),
    ("euronews", "UCW2QcKZiU8aUGg4yxCIditg"),
    ("France Inter", "UCJldRgT_D7Am-ErRHQZ90uw"),
    ("Mediapart", "UCdnaDhU-LDQrIEEmSIfq0-Q"),
    ("Le Parisien", "UCfHn_8-ehdem86fEvlFg-Gw"),
    ("TF1 INFO", "UCsrPUA0ZSDCNZC6wyRlR7ZA"),
    ("LCI", "UCewhc0fvja891XkpIPGRMxQ"),
    ("France Culture", "UCd5DKToXYTKAQ6khzewww2g"),
]
NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}
UA = "Mozilla/5.0 (compatible; ScoopNewsBot/1.0)"
OUT = pathlib.Path(__file__).with_name("shorts-today.txt")


def get(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def embeddable(vid):
    """oEmbed répond 401/403 si l'intégration est interdite."""
    try:
        get(f"https://www.youtube.com/oembed?url=https://www.youtube.com/shorts/{vid}&format=json", 15)
        return "oui"
    except urllib.error.HTTPError:
        return "non"
    except Exception:
        return "?"


def main():
    hours = int(sys.argv[1]) if len(sys.argv) > 1 else 36
    now = datetime.datetime.now(datetime.timezone.utc)
    since = now - datetime.timedelta(hours=hours)
    lines = [f"Scoop - Shorts candidats du {now:%Y-%m-%d %H:%M} UTC (dernières {hours} h)",
             "Format : source | publié (UTC) | id | intégrable | titre", ""]
    n = 0
    for name, cid in CHANNELS:
        try:
            root = ET.fromstring(get(f"https://www.youtube.com/feeds/videos.xml?playlist_id=UUSH{cid[2:]}"))
            for e in root.findall("a:entry", NS):
                pub = datetime.datetime.fromisoformat(e.findtext("a:published", "", NS).replace("Z", "+00:00"))
                if pub < since:
                    continue
                vid = e.findtext("yt:videoId", "", NS)
                title = " ".join((e.findtext("a:title", "", NS)).split())
                lines.append(f"{name} | {pub.astimezone(datetime.timezone.utc):%Y-%m-%d %H:%M} | {vid} | {embeddable(vid)} | {title}")
                n += 1
        except Exception as ex:  # une chaîne en panne ne bloque pas les autres
            lines.append(f"{name} | ERREUR : {ex}")
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"OK : {n} Shorts -> {OUT}")


if __name__ == "__main__":
    main()
