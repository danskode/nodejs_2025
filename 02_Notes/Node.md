# 28. august

## Kom i gang med node:

[-] Man skal starte med at hente node fra nodejs.org
[-] Under filer: Slå auto save til i VS Code!
[-] I settings: Slå mouse wheel zoom til i VS code
[-] I settings: Slå code i shell path til

## Nodejs:

Er kompileren så JS kan køre rundt omkring uden for browseren.
Startede med V8 fra Århus. En VM, der kørte javascript meget smooth.
Javascript startede i browseren.
Node er en "lille browser", der pakker software, så det kan tages ud af browseren.
Andre sprog har det samme fx Tauri i Rust.

### Bruges til:

[-] Webapps
[-] Desktop software
[-] Apps
[-] Konsolapplikationer
[-] Cron jobs
[-] Micro services mellem servere/systemer
[-] Ikke egnet til embedded

## Køre js i node:

I REPL: tast node i terminalen
node <filename>



## Build tools
Hjælper os med at intereagere med et programmeringssprog
Eksempler: Maven, Gradle, ant, NuGet, Gem, Rake, CMake, Pip, npm, yarn, pnpm

### Vi bruger npm
Her er lighederne til javas Maven:

Maven               npm
=====               =====
pom.xml             package.json

meta-information    meta-information
dependencies        dependencies
life cycles         scripts

**Express** er et web framework til node.js

**node_modules** skal aldrig pushes til github, da det skal hentes af den enkelte udvikler for at matche deres miljø +. det fylder unødigt. Det samme gælder for idea-mapper.

**Servermodellen** request (client) og response (server)

Ved **GET** send altid json retur: {key:"value"}

To måder at sende data via GET requests: Path variabler ":path" og request parametre 

Eksamensspørgsmål: hvor mange argumenter har get-metoden? Svaret er to: endpoint, fx "/" og callback-funtion "(req, res)"