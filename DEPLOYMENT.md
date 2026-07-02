# Deployment Guide - GitHub Pages

Ce guide vous aide à déployer "Les Gardiens du Lys" sur GitHub Pages.

## 📋 Pré-requis

- Un compte GitHub
- Git installé sur votre ordinateur
- Le projet cloné localement

## 🚀 Étapes de Déploiement

### Étape 1: Préparer votre Repository GitHub

1. Créez un nouveau repository sur GitHub:
   - Nommez-le `gardiens-du-lys` (ou n'importe quel nom)
   - Rendez-le **public** (obligatoire pour GitHub Pages)
   - N'initialisez pas avec README (vous l'avez déjà)

2. Copiez l'URL du repository (exemple: `https://github.com/yourusername/gardiens-du-lys.git`)

### Étape 2: Configurer Git Localement

1. Ouvrez un terminal dans le dossier du projet:
   ```bash
   cd ~/Gardiens\ du\ Lys
   ```

2. Initialisez le repository Git:
   ```bash
   git init
   ```

3. Ajoutez le remote GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/gardiens-du-lys.git
   ```

4. Vérifiez que le remote est configuré:
   ```bash
   git remote -v
   ```

### Étape 3: Committer et Pousser le Code

1. Ajoutez tous les fichiers:
   ```bash
   git add .
   ```

2. Créez le premier commit:
   ```bash
   git commit -m "Initial commit: Les Gardiens du Lys website"
   ```

3. Changez le nom de la branche par défaut en `main` (si nécessaire):
   ```bash
   git branch -M main
   ```

4. Poussez le code vers GitHub:
   ```bash
   git push -u origin main
   ```

### Étape 4: Configurer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Build and deployment":
   - **Source**: Sélectionnez "Deploy from a branch"
   - **Branch**: Sélectionnez `main`
   - **Folder**: Sélectionnez `/ (root)`
5. Cliquez **Save**

### Étape 5: Vérifier le Déploiement

1. Attendez 1-2 minutes que GitHub Pages s'initialise
2. Vous verrez un message: "Your site is live at..."
3. Visitez l'URL fournie: `https://yourusername.github.io/gardiens-du-lys`

## 🔧 Configurations Importantes

### Mettre à Jour l'URL de Base

Si vous utilisez un repository avec un nom différent, mettez à jour dans `_config.yml`:

```yaml
baseurl: /gardiens-du-lys
url: https://yourusername.github.io
```

### Redirection du Domaine Personnalisé (Optionnel)

Si vous avez un domaine personnalisé:

1. Dans GitHub Pages Settings, sous "Custom domain", entrez votre domaine
2. Configurez les DNS records chez votre registrar:
   - **Option A**: Enregistrements A pointant vers les IPs GitHub
   - **Option B**: CNAME pointant vers `yourusername.github.io`

3. Attendez la vérification du DNS (jusqu'à 24h)

## 📝 Mises à Jour Futures

Pour mettre à jour le site après le déploiement initial:

```bash
# Effectuez vos changements locaux
# ...

# Ensuite:
git add .
git commit -m "Description des changements"
git push origin main
```

GitHub Pages se mettra à jour automatiquement en quelques minutes.

## 🔒 Sécurité

- ✅ HTTPS est automatiquement activé par GitHub Pages
- ✅ Certificat SSL gratuit fourni par GitHub/Let's Encrypt
- ✅ Aucune donnée sensible ne doit être dans le repository

## ❓ Dépannage

### Le site n'apparaît pas

1. Vérifiez que le repository est **public**
2. Vérifiez que GitHub Pages est activé dans Settings
3. Attendez 3-5 minutes après le premier push
4. Vérifiez l'URL: `https://yourusername.github.io/repository-name`

### Les styles/scripts ne se chargent pas

1. Vérifiez le chemin dans `_config.yml`:
   ```yaml
   baseurl: /repository-name
   ```

2. Vérifiez que les chemins dans `index.html` sont relatifs:
   ```html
   <link rel="stylesheet" href="assets/styles/main.css">
   ```

### Erreur 404 sur les pages

1. Vérifiez que les fichiers existent:
   - `pages/home.html`
   - `pages/about.html`
   - `pages/contact.html`
   - `pages/components/navbar.html`
   - `pages/components/footer.html`

2. Vérifiez que `app.js` pointe vers les bons chemins

## 📊 Monitoring et Analytics

### Google Analytics (Optionnel)

1. Créez un compte Google Analytics
2. Ajoutez ce code à `index.html` avant `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Netlify Analytics (Alternative)

Netlify offre une alternative à Google Analytics sans trackers externes.

## 🎯 Bonnes Pratiques

1. **Commits réguliers**: Committez vos changements souvent
2. **Messages clairs**: Utilisez des messages de commit descriptifs
3. **Testing local**: Testez localement avant de pousser
4. **Sauvegardes**: Gardez une copie locale de votre code
5. **Documentation**: Maintenez le README à jour

## 📚 Ressources

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Guide Git](https://git-scm.com/book)
- [Jekyll Documentation](https://jekyllrb.com/)
- [OGame Community](https://www.ogame.fr/)

---

**Questions ?** Consultez le README.md ou contactez l'équipe sur Discord!
