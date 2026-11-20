# Clip Maker

**Clip Maker** transforme une longue vidéo (YouTube ou fichier) en clips verticaux prêts pour TikTok : il trouve les meilleurs moments, découpe, recadre en 9:16, ajoute des sous-titres mot par mot et une accroche, puis te laisse envoyer les clips en brouillon. Tout se passe sur ton PC.

Créé par **Rafael Vallais**. Logiciel gratuit pour Windows.

> Ce dépôt ne contient **pas** le code de Clip Maker : seulement les versions à télécharger.

## Télécharger

1. Ouvre la page **[Releases](../../releases/latest)** de ce dépôt.
2. Télécharge `ClipMaker-Setup-<version>.exe` (la dernière version).
3. Double-clique dessus et suis les étapes. L'installation se fait **sans droits administrateur**.

Pendant l'installation, une page « Composants » te montre ce qui sera téléchargé selon ton PC (nom, rôle, taille, licence). Tu peux la lire et décocher ce qui est facultatif.

### Windows affiche « Windows a protégé votre ordinateur »
Clip Maker n'est pas encore signé numériquement, donc Windows ne connaît pas l'éditeur. Clique sur **Informations complémentaires**, puis sur **Exécuter quand même**. Tu peux vérifier que le fichier vient bien de cette page avant de l'ouvrir.

## Configuration requise

| | |
|---|---|
| Système | Windows 11, ou Windows 10 (version 1803 ou plus récente) en 64 bits |
| Affichage | Composant Microsoft **WebView2** (déjà présent sur Windows 11 ; sur certains Windows 10, [à installer ici](https://developer.microsoft.com/microsoft-edge/webview2/)) |
| Mémoire | 8 Go conseillés (estimation : testé surtout sur 31 Go) |
| Carte graphique | **NVIDIA recommandée** (sous-titres rapides). Sans NVIDIA (AMD, Intel ou aucune) : tout marche, en **mode compatible**, plus lent (compte environ 5 à 6 minutes de sous-titres pour 20 minutes de vidéo) |
| Place disque | Avec carte NVIDIA : environ 4 Go une fois installé (prévois 7 Go libres pendant l'installation). Sans NVIDIA : environ 1,2 Go (prévois 3 Go libres). Tailles calculées sur les fichiers réels, à confirmer sur la page de l'installeur |
| Internet | Pour télécharger les vidéos et les composants à l'installation |

## Mises à jour
Quand une nouvelle version existe, une pastille apparaît dans Clip Maker. **Rien ne s'installe sans ton clic**, et jamais pendant un montage. Seuls les fichiers qui ont changé sont téléchargés.

## Désinstaller
Paramètres Windows, Applications, Clip Maker. Le désinstalleur te demande si tu veux aussi supprimer les composants téléchargés. Tes clips et tes réglages ne sont jamais touchés.

## Licence et conditions
Clip Maker est **gratuit, tous droits réservés** : tu peux l'utiliser librement, mais il est interdit de le revendre, de le modifier ou de le redistribuer. Le code n'est pas publié. Il est fourni tel quel, sans garantie. Les conditions complètes et les licences des logiciels tiers sont dans `LICENCE.txt` (installé avec le logiciel) et dans la page « Licences et crédits » de Clip Maker. Tu restes responsable des vidéos que tu traites et publies : n'utilise que des contenus que tu as le droit de clipper, et cite la source.

## Crédits
Clip Maker s'appuie sur des logiciels libres, utilisés tels quels :
- **FFmpeg** (build GPL v3 de BtbN) : GPL v3. Code source : <https://github.com/FFmpeg/FFmpeg> et <https://github.com/BtbN/FFmpeg-Builds>. Utilisé sans modification, en programme séparé.
- **yt-dlp** : Unlicense.
- **faster-whisper**, **CTranslate2** et les modèles **Whisper** d'OpenAI : MIT.
- **Bibliothèques NVIDIA cuBLAS** (téléchargées seulement avec une carte NVIDIA) : licence NVIDIA CUDA.
- **OpenCV** (Apache 2.0), **YuNet** (MIT), **YAMNet** (Apache 2.0), **PyAV** (BSD), **pywebview** (BSD), **NumPy** (BSD), **onnxruntime** (MIT), **Python** (PSF).
- Données **SponsorBlock** : CC BY-NC-SA 4.0 (<https://sponsor.ajay.app>).
- **Google Gemini** (facultatif, avec ta propre clé) : conditions de l'API Gemini.

Clip Maker n'est affilié ni à TikTok, ni à YouTube, ni à Google, ni à NVIDIA.
