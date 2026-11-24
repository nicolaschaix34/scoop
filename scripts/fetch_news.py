#!/usr/bin/env python3
"""Scoop - récupère les titres du jour (flux RSS de médias francophones).

Équivalent de fetch-news.ps1, pour la routine cloud (Linux).
Usage : python3 scripts/fetch_news.py
Sortie : scripts/news-today.txt
"""
import datetime
import html
import pathlib
import re
import urllib.request
import xml.etree.ElementTree as ET

FEEDS = [
    ("Le Monde - Une", "https://www.lemonde.fr/rss/une.xml"),
    ("Le Monde - International", "https://www.lemonde.fr/international/rss_full.xml"),
    ("franceinfo", "https://www.francetvinfo.fr/titres.rss"),
    ("France 24", "https://www.france24.com/fr/rss"),
    ("Le Monde - Economie", "https://www.lemonde.fr/economie/rss_full.xml"),
    ("Le Monde - Culture", "https://www.lemonde.fr/culture/rss_full.xml"),
    ("Le Monde - Pixels/Medias", "https://www.lemonde.fr/actualite-medias/rss_full.xml"),
]
UA = "Mozilla/5.0 (compatible; ScoopNewsBot/1.0)"
OUT = pathlib.Path(__file__).with_name("news-today.txt")


def clean(text):
    text = html.unescape(text or "")
    text = re.sub(r"<[^>]+>", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=25) as r:
        return r.read()


def main():
    lines = [f"Scoop - revue de presse brute du {datetime.datetime.now():%Y-%m-%d %H:%M}", ""]
    for name, url in FEEDS:
        try:
            root = ET.fromstring(fetch(url))
            lines.append(f"=== {name} ===")
            for item in list(root.iter("item"))[:15]:
                title = clean(item.findtext("title"))
                desc = clean(item.findtext("description"))
                if len(desc) > 300:
                    desc = desc[:300] + "..."
                lines.append(f"- {title}")
                lines.append(f"    {desc}")
                lines.append(f"    [{clean(item.findtext('pubDate'))}] {clean(item.findtext('link'))}")
            lines.append("")
        except Exception as e:  # un flux en panne ne bloque pas les autres
            lines.append(f"=== {name} === ERREUR : {e}")
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"OK -> {OUT}")


if __name__ == "__main__":
    main()
