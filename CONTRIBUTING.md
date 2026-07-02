# CONTRIBUTING.md

Merci de vouloir contribuer à "Les Gardiens du Lys" ! Ce guide vous aide à bien faire les choses.

## 🤝 Code de Conduite

Nous nous engageons à fournir un environnement accueillant et inclusif pour tous. S'il vous plaît:
- Soyez respectueux envers les autres membres
- Acceptez les critiques constructives
- Focalisez-vous sur ce qui est meilleur pour la communauté

## 🐛 Signaler des Bugs

Avant de signaler un bug, vérifiez s'il a déjà été rapporté.

### Comment Signaler
1. Allez sur **Issues** → **New Issue**
2. Remplissez le titre: `[BUG] Description courte`
3. Décrivez le bug:
   - Étapes pour reproduire
   - Comportement attendu
   - Comportement actuel
   - Captures d'écran (si applicable)
   - Navigateur/OS utilisé

### Exemple
```
Titre: [BUG] Formulaire de contact ne s'envoie pas

Description:
Lorsque je remplis le formulaire de contact et clique sur "Envoyer", rien ne se passe.

Étapes:
1. Allez à la page Contact
2. Remplissez le formulaire
3. Cliquez "Envoyer ma Candidature"

Attendu: Message de confirmation apparaît
Actuel: Rien ne se passe

Navigateur: Chrome 120.0 sur Windows 11
```

## 💡 Suggérer des Améliorations

Les améliorations sont bienvenues !

### Comment Suggérer
1. Allez sur **Issues** → **New Issue**
2. Remplissez le titre: `[FEATURE] Description courte`
3. Décrivez votre idée:
   - Pourquoi c'est utile
   - Comment l'implémenter (optionnel)
   - Exemples d'utilisation (optionnel)

### Exemple
```
Titre: [FEATURE] Ajouter support multi-langue

Description:
Les joueurs francophones ne sont pas les seuls. Proposer le site en anglais
attirerait plus de membres internationaux.

Implémentation:
- Créer i18n.js pour gérer les traductions
- Ajouter un sélecteur de langue dans le navbar
- Traduire tous les contenus
```

## 🔧 Processus de Contribution

### 1. Fork le Repository
```bash
# Sur GitHub, cliquez "Fork"
```

### 2. Clonez Votre Fork
```bash
git clone https://github.com/YOUR_USERNAME/gardiens-du-lys.git
cd gardiens-du-lys
```

### 3. Créez une Branche
```bash
git checkout -b feature/ma-feature
# ou
git checkout -b fix/mon-bug
```

### 4. Faites Vos Changements
- Modifiez les fichiers appropriés
- Testez localement
- Assurez-vous que rien n'est cassé

### 5. Committez Vos Changements
```bash
git add .
git commit -m "Description claire du changement"
```

### Conseils pour les Commits
- Soyez descriptif: `"Add dark mode support"` > `"update"`
- Utilisez l'impératif: `"Add feature"` pas `"Added feature"`
- Référencez les issues: `"Fix #123"`
- Commitez souvent

### 6. Poussez vers Votre Fork
```bash
git push origin feature/ma-feature
```

### 7. Ouvrez une Pull Request
1. Allez sur votre fork GitHub
2. Cliquez "Compare & pull request"
3. Remplissez la description:
   - Qu'avez-vous changé ?
   - Pourquoi l'avez-vous changé ?
   - Comment tester votre changement ?

4. Cliquez "Create Pull Request"

### 8. Attendez la Révision
- Les mainteneurs vont réviser votre code
- Adressez les feedback
- Votre PR sera mergée si tout est bon !

## 📋 Critères d'Acceptation

Votre contribution sera plus facilement acceptée si:

### Code
- ✅ Fonctionne sur les principaux navigateurs
- ✅ Suit le style de code existant
- ✅ Testé localement
- ✅ Pas d'erreurs console
- ✅ Commentés si complexe
- ✅ Responsive (mobile/desktop)

### Documentation
- ✅ README.md mis à jour
- ✅ Code commenté si nécessaire
- ✅ Erreurs documentées

### Performance
- ✅ Pas de dégradation de performance
- ✅ Images optimisées
- ✅ Code CSS/JS minified recommandé

## 🎨 Style de Code

### HTML
```html
<!-- Utilisez des indentations de 4 espaces -->
<!-- Fermez tous les tags -->
<!-- Utilisez des classes parlantes -->
<div class="navbar-brand">
    <img src="favicon.svg" alt="Logo">
    Les Gardiens du Lys
</div>
```

### CSS
```css
/* Utilisez les variables CSS */
/* Ordonnez logiquement les propriétés */
.card {
    display: flex;
    background: var(--color-bg);
    border: 1px solid var(--color-secondary);
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;
}
```

### JavaScript
```javascript
// Utilisez camelCase
// Commentez les fonctions complexes
// Utilisez const/let pas var
const navigateTo = async (page) => {
    // Implementation
};
```

## 📂 Où Ajouter du Code

- **Pages HTML**: `pages/`
- **Styles CSS**: `assets/styles/`
- **Scripts JS**: `assets/scripts/`
- **Images**: `assets/images/`
- **Vidéos**: `assets/videos/`
- **Polices**: `assets/fonts/`

## 🧪 Testing

Avant de soumettre:

1. **Test local**:
   ```bash
   python -m http.server 8000
   # Ouvrez http://localhost:8000
   ```

2. **Test tous les navigateurs**:
   - Chrome
   - Firefox
   - Safari
   - Edge

3. **Test mobile**:
   - Ouvrez DevTools (F12)
   - Activez "Responsive Design Mode" (Ctrl+Shift+M)
   - Testez à 320px, 768px, 1920px

4. **Vérifiez les erreurs**:
   - Ouvrez la console (F12)
   - Assurez-vous qu'il n'y a pas d'erreurs rouges

## 📚 Documentation

Si vous ajoutez une feature, documentez-la:

- **README.md**: Vue d'ensemble du projet
- **DEVELOPMENT.md**: Comment développer localement
- **Code Comments**: Expliquez les parties complexes

## 🚀 Processus de Release

1. Le mainteneur revue les PRs
2. Merge dans `main` si approuvé
3. GitHub Pages se met à jour automatiquement
4. Le site live est mis à jour en quelques minutes

## 💬 Besoin d'Aide ?

- Commentez sur l'issue ou PR
- Demandez des clarifications
- Consultez DEVELOPMENT.md pour l'aide technique

## 📝 Templates

### Bug Report
```markdown
## Description
[Description du bug]

## Étapes pour Reproduire
1. [Étape 1]
2. [Étape 2]
3. [Étape 3]

## Comportement Attendu
[Description du comportement attendu]

## Comportement Actuel
[Description de ce qui se passe vraiment]

## Environnement
- Navigateur: [ex: Chrome 120]
- OS: [ex: Windows 11]
- Version du Site: [ex: v1.0]
```

### Feature Request
```markdown
## Description
[Description de la feature]

## Utilité
[Pourquoi c'est utile]

## Implémentation Suggeréée
[Comment l'implémenter - optionnel]

## Context
[Contexte additionnel - optionnel]
```

### Pull Request
```markdown
## Description des Changements
[Qu'avez-vous changé ?]

## Type de Changement
- [ ] Bug fix
- [ ] Nouvelle feature
- [ ] Amélioration
- [ ] Documentation

## Comment Tester
[Comment tester votre changement]

## Checklist
- [ ] Code testé localement
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Documentation updatée
- [ ] Pas de breaking changes
```

## 🎉 Merci !

Votre contribution aide à rendre "Les Gardiens du Lys" encore meilleur. Nous apprécions votre aide !

---

**Questions ?** N'hésitez pas à demander ! 🚀
