/* Ancienne adresse de Scoop : ce service worker remplace l'ancien, vide son cache,
   se désinstalle et renvoie les pages ouvertes vers la nouvelle adresse. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(c => { try { c.navigate('https://scoopfr.github.io/'); } catch (err) { /* ignore */ } });
  })());
});
