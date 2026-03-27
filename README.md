# Linktree (site estático)

Um “link na bio” leve, rápido e pronto para subir em domínio próprio — sem depender de Node/npm.

## Estrutura

- `index.html`: página principal
- `src/styles/`: tema e componentes de UI (CSS)
- `src/app/`: JavaScript modular (features)
- `assets/`: ícones e fontes

## Personalizar (o que você deve trocar)

1. **Título e nome da marca**
   - Em `index.html`, troque `Sua Marca` pelo nome real.

2. **Links**
   - Em `index.html`, edite os `href` de:
     - **Instagram** (`.social__btn`)
     - **Comunidade / Pré‑evento**
     - **Entre em contato** (atualmente WhatsApp)

3. **Localização**
   - O card de localização abre um diálogo (`<dialog>`) e os links são montados no JavaScript.
   - Para trocar endereço, edite a constante `ADDRESS` em `src/app/features/location-chooser.js`.
4. **Fonte Nagel (Regular/Medium/Bold)**
   - Coloque os arquivos:
     - `assets/fonts/Nagel-Regular.woff2`
     - `assets/fonts/Nagel-Medium.woff2`
     - `assets/fonts/Nagel-Bold.woff2`
   - Se você ainda não tiver `.woff2`, me diga o formato que você tem (`.otf`/`.ttf`) que eu ajusto o projeto.

5. **Logo (avatar)**
   - Coloque sua logo em `assets/icons/logo.png`
   - Se preferir outro nome/extensão, edite em `index.html` a linha do `src="./assets/icons/logo.png"`

## Rodar localmente (sem Node)

Você precisa abrir via servidor local (recomendado).

### Opção A: Python (se tiver instalado)

```bash
python -m http.server 5173
```

Depois abra `http://localhost:5173`.

### Opção B: Extensão do VS Code/Cursor

Use uma extensão tipo “Live Server” e abra o `index.html`.

## Deploy em domínio próprio

### Netlify (mais simples)
- Crie um site novo
- Faça upload da pasta do projeto (ou conecte o repositório, se você usar Git)
- A “publish directory” é a raiz do projeto (onde está o `index.html`)
- Aponte seu domínio no Netlify (DNS)

### Cloudflare Pages
- Crie um projeto
- Se for upload/commit: a pasta de saída é a raiz (sem build)
- Aponte o domínio no Cloudflare

### Hospedagem tradicional (cPanel/FTP)
- Envie todos os arquivos para a pasta pública do domínio (geralmente `public_html`)

