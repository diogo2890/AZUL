# Azul Caffè & Brunch's — Site vitrine

Site one page pour **Azul Caffè & Brunch's**, brunch algérien à Lisbonne (Bairro Azul, São Sebastião).
HTML / CSS / JavaScript purs, sans framework ni build : il s'ouvre directement dans un navigateur.

## Ouvrir le site

Double-cliquez sur `index.html`. C'est tout.

> Astuce : pour un aperçu plus fidèle (polices, carte), servez le dossier en local :
> `python3 -m http.server 8000` puis ouvrez `http://localhost:8000`.

## Structure des fichiers

```
index.html      → structure de la page (sections, textes par défaut en portugais)
styles.css      → tout le design (mobile first, variables de couleurs en haut de fichier)
script.js       → traductions PT/EN/FR, menu + prix, interactions
assets/         → favicon.svg, placeholder.svg (image de secours)
CREDITS.md      → attributions des photos temporaires
```

## Changer les photos

Les photos actuelles sont des images **Unsplash temporaires**. Chaque emplacement à
remplacer est marqué d'un commentaire `TODO PHOTO` dans `index.html` (et un dans
`styles.css` pour l'image du héros), avec les dimensions recommandées.

1. Placez vos photos dans le dossier `assets/` (ex. `assets/couscous.jpg`).
2. Dans `index.html`, remplacez l'URL `https://images.unsplash.com/...` de la balise
   `<img>` par `assets/couscous.jpg`, et mettez à jour l'attribut `alt`.
3. Pour l'image plein écran du héros : dans `styles.css`, section `.hero`,
   remplacez l'URL dans `background-image`.
4. Supprimez ensuite la petite étiquette `<figcaption class="photo-slot">…</figcaption>`
   sous chaque image remplacée (elle sert uniquement à marquer les emplacements).
5. Mettez à jour `og:image` et `twitter:image` dans le `<head>` avec une photo
   1200×630 px hébergée sur votre domaine.

Dimensions recommandées : héros 1920×1280 px · histoire 1000×1250 px ·
couscous 1200×900 px · galerie 1200×900 px (ou carrées 1200×1200 px).
Compressez les images (ex. [squoosh.app](https://squoosh.app)) pour rester rapide.

## Changer le téléphone, WhatsApp et Instagram

Cherchez `TODO CONTACT` dans `index.html` :

- **Téléphone** : remplacez `tel:+351000000000` par votre numéro (format international).
- **WhatsApp** : remplacez `https://wa.me/351000000000` par votre numéro au format
  `wa.me/351XXXXXXXXX` (indicatif pays + numéro, sans `+`, sans espaces).
  Il y a **deux** liens WhatsApp : le bouton de la section contact et le bouton flottant
  en bas de page.
- **Instagram** : remplacez `https://www.instagram.com/` par l'URL de votre profil
  (deux endroits : section contact et pied de page).
- **Fiche Google** : cherchez `TODO GOOGLE` et remplacez le lien de recherche par le
  lien direct de votre fiche Google Business (bouton « Partager » de la fiche).

## Changer les prix ou les plats

Tout le menu vit dans `script.js`, objet `MENU` (avec les traductions PT/EN/FR de
chaque plat). **Vérifiez tous les prix avant la mise en ligne.**

## Changer les textes

Tous les textes du site sont dans `script.js`, objet `I18N`, classés par langue
(`pt`, `en`, `fr`). Modifiez les trois langues pour rester cohérent.

## Mettre en ligne gratuitement

### Option A — Netlify (le plus simple)

1. Créez un compte gratuit sur [netlify.com](https://www.netlify.com).
2. Sur le tableau de bord, glissez-déposez le dossier du site (« Deploy manually »).
3. Le site est en ligne en quelques secondes sur une URL `*.netlify.app`.
4. Optionnel : ajoutez votre propre nom de domaine dans « Domain settings ».

### Option B — GitHub Pages

1. Poussez ces fichiers dans un dépôt GitHub.
2. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch**,
   choisissez la branche `main` et le dossier `/ (root)`.
3. Le site est servi sur `https://<votre-compte>.github.io/<nom-du-depot>/`.

Après la mise en ligne, remplacez `https://azulcaffe.example.com/` par la vraie URL
dans le `<head>` de `index.html` (balises `canonical`, `og:url`, et le JSON-LD).

## ✅ Check-list avant mise en ligne

- [ ] **Vérifier tous les prix** dans `script.js` (objet `MENU`).
- [x] Photos réelles intégrées : couscous (section), crêpe salée, crêpe sucrée et café (galerie), dans `assets/`.
- [ ] Remplacer la **dernière image temporaire** : le fond du héros et l'image de partage (`TODO PHOTO`, une seule photo d'ambiance 1920×1280 px).
- [ ] Renseigner le **numéro de téléphone** (`tel:`) — cherchez `TODO CONTACT`.
- [ ] Renseigner le **numéro WhatsApp** (2 liens `wa.me`).
- [ ] Renseigner le **lien Instagram** (2 endroits).
- [ ] Remplacer le **lien de la fiche Google** (3 endroits) — cherchez `TODO GOOGLE`.
- [ ] Remplacer les **3 avis illustratifs** par de vrais extraits d'avis Google (avec accord des auteurs).
- [ ] Vérifier que la **carte Google Maps** pointe bien sur le restaurant, sinon ajuster l'URL de l'iframe.
- [ ] Mettre la **vraie URL du site** dans `canonical`, `og:url`, `og:image` et le JSON-LD.
- [ ] Vérifier les **horaires** (actuellement : mardi–dimanche 9h–22h, lundi fermé) dans le tableau, le pied de page et le JSON-LD.
- [ ] Relire les textes dans les **trois langues** (PT / EN / FR).
