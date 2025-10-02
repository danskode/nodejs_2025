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

Maven npm
===== =====
pom.xml package.json

meta-information meta-information
dependencies dependencies
life cycles scripts

**Express** er et web framework til node.js

**node_modules** skal aldrig pushes til github, da det skal hentes af den enkelte udvikler for at matche deres miljø +. det fylder unødigt. Det samme gælder for idea-mapper.

**Servermodellen** request (client) og response (server)

Ved **GET** send altid json retur: {key:"value"}

To måder at sende data via GET requests: Path variabler ":path" og request parametre

Eksamensspørgsmål: hvor mange argumenter har get-metoden? Svaret er to: endpoint, fx "/" og callback-funtion "(req, res)"

npm run bruges til at køre bash scripts fra package.json, fx npm run test. Det er smart at lave dev for nodemon ("node app.js") og prod ()"node app.js")

**Miljøvariabler:** Gælder for en session ikke globalt. Brug fx console.log(process.env) i app.js for at se udvalget, det viser environment varibles, som kan tilgås, fx console.log(process.env.PWD). Sæt den i kode med fx "const PORT = Number(process.env.PORT);" Number gør det bare gult. det er også ok at logge consten som en str, der er standard.

Installer **devDependencies** npm install --save-dev cross-env, så kan man i scripts fx sætte: "dev": "cross-env PORT=9090 nodemon app.js". Cross-env er en wrapper, så script-sprog ikke er OS-afhængig. nodemon er også en wrapper til nodejs ...

Miljøvariable kan også køres når man bruger node normalt: "PORT=8080 node app.js" **Falcy** false, null, undefined, NaN, "", 0
Med || short-circuit, så den tager den første værdi, så "false || null || 5 || NaN" vil give 5. Det bruges så ved "const PORT = Number(process.env.PORT) || 8080;"

**Hemmelige miljøvariable** skal i en .env-fil som normalt.

Til HTML er acceability vigtigt. Så brug **semantisk HTML**, fx nav.
