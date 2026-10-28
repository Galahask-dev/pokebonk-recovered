# PokéBonk – versión recuperada para navegador

[Jugar](https://acshan.github.io/pokebonk-recovered/?lang=es)

Versión recuperada y editable, basada en el cliente público v0.5.5 / mvc5u5vc. El backend original no se ha recuperado; una API sustituta se ejecuta en el navegador, la partida se guarda solo en el navegador actual y no se conecta al servidor oficial.

Se puede empezar como invitado, elegir personaje y región, combatir, usar la liquidación sustituta y guardar el progreso local. El inicio de sesión, la sincronización en la nube, el ranking oficial, las recompensas de temporada, los clanes y los amigos no están disponibles. Las recompensas sustitutas no equivalen a las del servidor oficial. La primera carga requiere descargar los recursos del juego.

No introduzcas la cuenta ni la contraseña del servidor oficial. Las partidas guardadas de versiones de desarrollo local no se migran automáticamente. Borrar los datos del navegador hará que pierdas el progreso de este sitio.

Se conservan la atribución al autor original del sitio y los avisos legales; no se añade ninguna licencia nueva para el código ni los recursos originales.

Despliegue: raíz de la rama main, GitHub Pages publicado desde la rama; conserva `.nojekyll`. Para actualizar, ejecuta `node tools/build-pages.mjs` en el espacio de trabajo de recuperación original y haz commit de los archivos exportados.
