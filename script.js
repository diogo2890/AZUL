/* ══════════════════════════════════════════════════════════════════════
   AZUL CAFFÈ & BRUNCH'S — script.js
   - Traductions PT / EN / FR (PT par défaut) + mémorisation en localStorage
   - Rendu du menu par catégories avec onglets
   - Menu burger mobile, apparition au défilement, horaires du jour
   - Secours automatique si une image externe ne charge pas
   ══════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ────────────────────────────────────────────────────────────────────
     TRADUCTIONS DE L'INTERFACE
     Chaque clé correspond à un attribut data-i18n dans index.html.
     ──────────────────────────────────────────────────────────────────── */
  const I18N = {
    pt: {
      "a11y.skip": "Saltar para o conteúdo",
      "a11y.openMenu": "Abrir o menu de navegação",
      "a11y.whatsapp": "Falar connosco no WhatsApp",

      "nav.story": "A nossa história",
      "nav.couscous": "Couscous de sexta",
      "nav.menu": "Menu",
      "nav.gallery": "Galeria",
      "nav.reviews": "Avaliações",
      "nav.contact": "Contacto",

      "hero.eyebrow": "Bairro Azul · São Sebastião · Lisboa",
      "hero.title": "O brunch argelino de Lisboa.",
      "hero.sub": "Cozinha caseira, halal, no coração do Bairro Azul.",
      "hero.ctaMenu": "Ver o menu",
      "hero.ctaVisit": "Como chegar",
      "hero.rating": "5,0 no Google · 31 avaliações",

      "quick.todayLabel": "Hoje",
      "quick.closed": "Fechado — voltamos terça às 9:00",
      "quick.open": "9:00 – 22:00",
      "quick.halalLabel": "100% halal",
      "quick.halalSub": "Cozinha caseira",
      "quick.reviews": "31 avaliações",

      "story.eyebrow": "A nossa história",
      "story.title": "Um pedaço da Argélia no Bairro Azul",
      "story.p1": "O Azul nasceu de uma ideia simples: cozinhar em Lisboa como se cozinha em casa, na Argélia. Sem pressa, com boas receitas de família e a porta sempre aberta.",
      "story.p2": "Aqui encontra o couscous que junta toda a gente à sexta-feira, doces orientais feitos por nós, mas também crepes, omeletes e quiches acabados de fazer. A alma é argelina; a mesa é generosa e para todos.",
      "story.p3": "Estamos a dois passos do metro São Sebastião e do El Corte Inglés, com uma esplanada tranquila para os dias de sol. Tudo o que servimos é halal.",

      "couscous.eyebrow": "Só à sexta-feira",
      "couscous.title": "O ritual do couscous de sexta",
      "couscous.p1": "Na Argélia, a sexta-feira é dia de couscous — o dia em que a família se junta à volta de um prato só. No Azul mantemos esse ritual, aqui em Lisboa.",
      "couscous.p2": "Todas as sextas, a sêmola é trabalhada à mão de manhã, os legumes cozem devagar e o caldo perfuma a casa inteira. Quando acaba, acabou — por isso o melhor é chegar cedo.",
      "couscous.li1": "Receita de família, feita de raiz todas as sextas",
      "couscous.li2": "Quantidades limitadas — enquanto durar",
      "couscous.li3": "100% halal, como tudo na nossa cozinha",
      "couscous.cta": "Reservar a minha sexta",

      "menu.eyebrow": "O menu",
      "menu.title": "Caseiro, generoso, halal",
      "menu.intro": "A alma da casa é argelina — o couscous, os doces orientais — e a mesa é variada: crepes, omeletes, quiches e bons cafés, tudo feito por nós.",
      "menu.sigFridayBadge": "Sexta-feira",
      "menu.sigCouscous": "Couscous de sexta-feira",
      "menu.sigCouscousDesc": "O nosso prato especial, feito de raiz todas as sextas. Enquanto durar.",
      "menu.sigDailyBadge": "Todos os dias",
      "menu.sigPastries": "Doces orientais",
      "menu.sigPastriesDesc": "Variedade do dia, feita por nós: mel, amêndoa, flor de laranjeira.",
      "menu.note": "Preços com IVA incluído. A carta pode variar consoante o mercado do dia.",

      "gallery.eyebrow": "Galeria",
      "gallery.title": "Um cheirinho do Azul",
      "gallery.intro": "Fotos temporárias de ilustração — em breve, as verdadeiras imagens da casa.",
      "gallery.slotStory": "Foto temporária — a substituir pela vossa sala",
      "gallery.slotCouscous": "Foto temporária — a substituir pelo vosso couscous",
      "gallery.slot1": "A substituir: o vosso café",
      "gallery.slot2": "A substituir: uma mesa de brunch",
      "gallery.slot3": "A substituir: os doces orientais",
      "gallery.slot4": "A substituir: o couscous de sexta",
      "gallery.slot5": "A substituir: a esplanada turquesa",
      "gallery.slot6": "A substituir: o bairro, São Sebastião",

      "reviews.eyebrow": "Avaliações",
      "reviews.title": "5,0 estrelas no Google",
      "reviews.intro": "31 avaliações, todas de 5 estrelas. É a nossa maior recompensa.",
      "reviews.r1": "« O couscous de sexta é de outro nível — sabores de casa, porções generosas. Já é um ritual nosso. »",
      "reviews.r2": "« Doces orientais deliciosos e um atendimento de uma simpatia rara. O melhor brunch halal de Lisboa. »",
      "reviews.r3": "« Sítio pequeno e cheio de alma, mesmo ao lado do metro. Os crepes são feitos na hora — voltamos sempre. »",
      "reviews.cta": "Ler as avaliações no Google",

      "contact.eyebrow": "Contacto e acesso",
      "contact.title": "Venha ver-nos",
      "contact.addressLabel": "Morada",
      "contact.landmark": "Junto ao El Corte Inglés · Metro São Sebastião",
      "contact.hoursLabel": "Horário",
      "contact.closed": "Fechado",
      "contact.fridayNote": "· dia de couscous",
      "contact.call": "Ligar",
      "contact.directions": "Itinerário",

      "days.mon": "Segunda", "days.tue": "Terça", "days.wed": "Quarta",
      "days.thu": "Quinta", "days.fri": "Sexta", "days.sat": "Sábado", "days.sun": "Domingo",

      "footer.tagline": "O brunch argelino de Lisboa — caseiro e halal.",
      "footer.hours": "Terça a domingo, 9:00 – 22:00",
      "footer.closedMon": "Segunda: fechado",
      "footer.followLabel": "Siga-nos",
      "footer.mention": "Azul — brunch argelino em Lisboa"
    },

    en: {
      "a11y.skip": "Skip to content",
      "a11y.openMenu": "Open navigation menu",
      "a11y.whatsapp": "Chat with us on WhatsApp",

      "nav.story": "Our story",
      "nav.couscous": "Friday couscous",
      "nav.menu": "Menu",
      "nav.gallery": "Gallery",
      "nav.reviews": "Reviews",
      "nav.contact": "Contact",

      "hero.eyebrow": "Bairro Azul · São Sebastião · Lisbon",
      "hero.title": "Lisbon's Algerian brunch.",
      "hero.sub": "Homemade, halal, in the heart of Bairro Azul.",
      "hero.ctaMenu": "See the menu",
      "hero.ctaVisit": "Find us",
      "hero.rating": "5.0 on Google · 31 reviews",

      "quick.todayLabel": "Today",
      "quick.closed": "Closed — back Tuesday at 9:00",
      "quick.open": "9:00 – 22:00",
      "quick.halalLabel": "100% halal",
      "quick.halalSub": "Homemade cooking",
      "quick.reviews": "31 reviews",

      "story.eyebrow": "Our story",
      "story.title": "A little piece of Algeria in Bairro Azul",
      "story.p1": "Azul was born from a simple idea: to cook in Lisbon the way we cook at home in Algeria. No rush, good family recipes, and a door that's always open.",
      "story.p2": "Here you'll find the couscous that brings everyone together on Fridays and oriental pastries made by us — but also crêpes, omelettes and quiches, fresh from the kitchen. The soul is Algerian; the table is generous and for everyone.",
      "story.p3": "We're two steps from São Sebastião metro and El Corte Inglés, with a quiet terrace for sunny days. Everything we serve is halal.",

      "couscous.eyebrow": "Fridays only",
      "couscous.title": "The Friday couscous ritual",
      "couscous.p1": "In Algeria, Friday is couscous day — the day the whole family gathers around a single dish. At Azul we keep that ritual alive, right here in Lisbon.",
      "couscous.p2": "Every Friday the semolina is worked by hand in the morning, the vegetables simmer slowly and the broth perfumes the whole house. When it's gone, it's gone — so come early.",
      "couscous.li1": "A family recipe, made from scratch every Friday",
      "couscous.li2": "Limited quantities — while it lasts",
      "couscous.li3": "100% halal, like everything in our kitchen",
      "couscous.cta": "Book my Friday",

      "menu.eyebrow": "The menu",
      "menu.title": "Homemade, generous, halal",
      "menu.intro": "The soul of the house is Algerian — the couscous, the oriental pastries — and the table is varied: crêpes, omelettes, quiches and good coffee, all made by us.",
      "menu.sigFridayBadge": "Friday",
      "menu.sigCouscous": "Friday couscous",
      "menu.sigCouscousDesc": "Our special dish, made from scratch every Friday. While it lasts.",
      "menu.sigDailyBadge": "Every day",
      "menu.sigPastries": "Oriental pastries",
      "menu.sigPastriesDesc": "Today's homemade selection: honey, almonds, orange blossom.",
      "menu.note": "Prices include VAT. The menu may vary with the day's market.",

      "gallery.eyebrow": "Gallery",
      "gallery.title": "A taste of Azul",
      "gallery.intro": "Temporary placeholder photos — the real pictures of the house are coming soon.",
      "gallery.slotStory": "Placeholder — replace with your dining room",
      "gallery.slotCouscous": "Placeholder — replace with your couscous",
      "gallery.slot1": "Replace with: your coffee",
      "gallery.slot2": "Replace with: a brunch table",
      "gallery.slot3": "Replace with: the oriental pastries",
      "gallery.slot4": "Replace with: the Friday couscous",
      "gallery.slot5": "Replace with: the turquoise terrace",
      "gallery.slot6": "Replace with: the neighbourhood, São Sebastião",

      "reviews.eyebrow": "Reviews",
      "reviews.title": "5.0 stars on Google",
      "reviews.intro": "31 reviews, every single one 5 stars. Our greatest reward.",
      "reviews.r1": "“The Friday couscous is on another level — flavours from home, generous portions. It's become our ritual.”",
      "reviews.r2": "“Delicious oriental pastries and remarkably warm service. The best halal brunch in Lisbon.”",
      "reviews.r3": "“A small place full of soul, right next to the metro. The crêpes are made to order — we always come back.”",
      "reviews.cta": "Read the reviews on Google",

      "contact.eyebrow": "Contact & directions",
      "contact.title": "Come and see us",
      "contact.addressLabel": "Address",
      "contact.landmark": "Next to El Corte Inglés · São Sebastião metro",
      "contact.hoursLabel": "Opening hours",
      "contact.closed": "Closed",
      "contact.fridayNote": "· couscous day",
      "contact.call": "Call us",
      "contact.directions": "Directions",

      "days.mon": "Monday", "days.tue": "Tuesday", "days.wed": "Wednesday",
      "days.thu": "Thursday", "days.fri": "Friday", "days.sat": "Saturday", "days.sun": "Sunday",

      "footer.tagline": "Lisbon's Algerian brunch — homemade and halal.",
      "footer.hours": "Tuesday to Sunday, 9:00 – 22:00",
      "footer.closedMon": "Monday: closed",
      "footer.followLabel": "Follow us",
      "footer.mention": "Azul — Algerian brunch in Lisbon"
    },

    fr: {
      "a11y.skip": "Aller au contenu",
      "a11y.openMenu": "Ouvrir le menu de navigation",
      "a11y.whatsapp": "Nous écrire sur WhatsApp",

      "nav.story": "Notre histoire",
      "nav.couscous": "Couscous du vendredi",
      "nav.menu": "Menu",
      "nav.gallery": "Galerie",
      "nav.reviews": "Avis",
      "nav.contact": "Contact",

      "hero.eyebrow": "Bairro Azul · São Sebastião · Lisbonne",
      "hero.title": "Le brunch algérien de Lisbonne.",
      "hero.sub": "Cuisine maison, halal, au cœur du Bairro Azul.",
      "hero.ctaMenu": "Voir le menu",
      "hero.ctaVisit": "Venir nous voir",
      "hero.rating": "5,0 sur Google · 31 avis",

      "quick.todayLabel": "Aujourd'hui",
      "quick.closed": "Fermé — retour mardi à 9h00",
      "quick.open": "9h00 – 22h00",
      "quick.halalLabel": "100% halal",
      "quick.halalSub": "Cuisine maison",
      "quick.reviews": "31 avis",

      "story.eyebrow": "Notre histoire",
      "story.title": "Un morceau d'Algérie dans le Bairro Azul",
      "story.p1": "Azul est né d'une idée simple : cuisiner à Lisbonne comme on cuisine à la maison, en Algérie. Sans se presser, avec de bonnes recettes de famille et une porte toujours ouverte.",
      "story.p2": "Vous y trouverez le couscous qui rassemble tout le monde le vendredi, des pâtisseries orientales faites par nos soins, mais aussi des crêpes, omelettes et quiches tout juste sorties de la cuisine. L'âme est algérienne ; la table est généreuse et pour tous.",
      "story.p3": "Nous sommes à deux pas du métro São Sebastião et d'El Corte Inglés, avec une terrasse tranquille pour les beaux jours. Tout ce que nous servons est halal.",

      "couscous.eyebrow": "Uniquement le vendredi",
      "couscous.title": "Le rituel du couscous du vendredi",
      "couscous.p1": "En Algérie, le vendredi est le jour du couscous — celui où toute la famille se retrouve autour d'un même plat. Chez Azul, nous faisons vivre ce rituel, ici à Lisbonne.",
      "couscous.p2": "Chaque vendredi, la semoule est travaillée à la main dès le matin, les légumes mijotent doucement et le bouillon parfume toute la maison. Quand il n'y en a plus, il n'y en a plus — venez tôt.",
      "couscous.li1": "Une recette de famille, préparée de A à Z chaque vendredi",
      "couscous.li2": "Quantités limitées — jusqu'à épuisement",
      "couscous.li3": "100% halal, comme tout dans notre cuisine",
      "couscous.cta": "Réserver mon vendredi",

      "menu.eyebrow": "Le menu",
      "menu.title": "Maison, généreux, halal",
      "menu.intro": "L'âme de la maison est algérienne — le couscous, les pâtisseries orientales — et la carte est variée : crêpes, omelettes, quiches et bons cafés, tout est fait par nous.",
      "menu.sigFridayBadge": "Vendredi",
      "menu.sigCouscous": "Couscous du vendredi",
      "menu.sigCouscousDesc": "Notre plat spécial, préparé de A à Z chaque vendredi. Jusqu'à épuisement.",
      "menu.sigDailyBadge": "Tous les jours",
      "menu.sigPastries": "Pâtisseries orientales",
      "menu.sigPastriesDesc": "Assortiment du jour, fait maison : miel, amande, fleur d'oranger.",
      "menu.note": "Prix TTC. La carte peut varier selon le marché du jour.",

      "gallery.eyebrow": "Galerie",
      "gallery.title": "Un avant-goût d'Azul",
      "gallery.intro": "Photos temporaires d'illustration — bientôt les vraies images de la maison.",
      "gallery.slotStory": "Photo temporaire — à remplacer par votre salle",
      "gallery.slotCouscous": "Photo temporaire — à remplacer par votre couscous",
      "gallery.slot1": "À remplacer : votre café",
      "gallery.slot2": "À remplacer : une table de brunch",
      "gallery.slot3": "À remplacer : les pâtisseries orientales",
      "gallery.slot4": "À remplacer : le couscous du vendredi",
      "gallery.slot5": "À remplacer : la terrasse turquoise",
      "gallery.slot6": "À remplacer : le quartier, São Sebastião",

      "reviews.eyebrow": "Avis",
      "reviews.title": "5,0 étoiles sur Google",
      "reviews.intro": "31 avis, tous à 5 étoiles. Notre plus belle récompense.",
      "reviews.r1": "« Le couscous du vendredi est d'un autre niveau — des saveurs de maison, des portions généreuses. C'est devenu notre rituel. »",
      "reviews.r2": "« Pâtisseries orientales délicieuses et un accueil d'une gentillesse rare. Le meilleur brunch halal de Lisbonne. »",
      "reviews.r3": "« Petit lieu plein d'âme, juste à côté du métro. Les crêpes sont faites minute — on y retourne toujours. »",
      "reviews.cta": "Lire les avis sur Google",

      "contact.eyebrow": "Contact et accès",
      "contact.title": "Venez nous voir",
      "contact.addressLabel": "Adresse",
      "contact.landmark": "À côté d'El Corte Inglés · Métro São Sebastião",
      "contact.hoursLabel": "Horaires",
      "contact.closed": "Fermé",
      "contact.fridayNote": "· jour de couscous",
      "contact.call": "Appeler",
      "contact.directions": "Itinéraire",

      "days.mon": "Lundi", "days.tue": "Mardi", "days.wed": "Mercredi",
      "days.thu": "Jeudi", "days.fri": "Vendredi", "days.sat": "Samedi", "days.sun": "Dimanche",

      "footer.tagline": "Le brunch algérien de Lisbonne — maison et halal.",
      "footer.hours": "Du mardi au dimanche, 9h00 – 22h00",
      "footer.closedMon": "Lundi : fermé",
      "footer.followLabel": "Suivez-nous",
      "footer.mention": "Azul — brunch algérien à Lisbonne"
    }
  };

  /* ────────────────────────────────────────────────────────────────────
     LE MENU
     ⚠️ GÉRANT : VÉRIFIER TOUS LES PRIX CI-DESSOUS AVANT MISE EN LIGNE.
     Chaque item : nom traduit (pt/en/fr), description optionnelle, prix.
     price: null → affiche un tiret (prix variable / à demander).
     ──────────────────────────────────────────────────────────────────── */
  const MENU = [
    {
      id: "comecar",
      label: { pt: "Para começar", en: "To start the day", fr: "Commencer la journée" },
      groups: [
        {
          title: { pt: "Padaria e pastelaria", en: "Bakery & pastries", fr: "Boulangerie et viennoiseries" },
          items: [
            { name: { pt: "Pastel de nata", en: "Pastel de nata", fr: "Pastel de nata" }, price: "1,30 €" },
            { name: { pt: "Croissant", en: "Croissant", fr: "Croissant" }, price: "1,20 €" },
            { name: { pt: "Croissant de queijo", en: "Cheese croissant", fr: "Croissant au fromage" }, price: "1,60 €" },
            { name: { pt: "Pain au chocolat", en: "Pain au chocolat", fr: "Pain au chocolat" }, price: "1,30 €" },
            { name: { pt: "Torrada com manteiga e queijo", en: "Toast with butter & cheese", fr: "Tartine beurre fromage" }, price: "1,80 €" },
            { name: { pt: "Torrada mista (queijo e fiambre)", en: "Mixed toast (cheese & ham)", fr: "Tartine mixte fromage jambon" }, price: "2,20 €" }
          ]
        },
        {
          title: { pt: "Doces orientais", en: "Oriental pastries", fr: "Pâtisseries orientales" },
          items: [
            {
              name: { pt: "Doces orientais — variedade do dia", en: "Oriental pastries — today's selection", fr: "Pâtisseries orientales — assortiment du jour" },
              desc: { pt: "Feitos por nós: mel, amêndoa, flor de laranjeira", en: "Homemade: honey, almonds, orange blossom", fr: "Faits maison : miel, amande, fleur d'oranger" },
              price: null
            }
          ]
        }
      ]
    },
    {
      id: "salgados",
      label: { pt: "Salgados", en: "Savoury", fr: "Salé" },
      groups: [
        {
          title: { pt: "Sopa", en: "Soup", fr: "Soupe" },
          items: [
            { name: { pt: "Sopa do dia", en: "Soup of the day", fr: "Soupe du jour" }, price: "3,00 €" }
          ]
        },
        {
          title: { pt: "Omeletes e ovos", en: "Omelettes & eggs", fr: "Omelettes et œufs" },
          items: [
            { name: { pt: "Omelete de queijo", en: "Cheese omelette", fr: "Omelette au fromage" }, price: "4,50 €" },
            { name: { pt: "Omelete de queijo e cogumelos", en: "Cheese & mushroom omelette", fr: "Omelette fromage et champignons" }, price: "5,50 €" },
            { name: { pt: "Ovo estrelado", en: "Fried egg", fr: "Œuf au plat" }, price: "2,00 €" }
          ]
        },
        {
          title: { pt: "Pancakes salgadas", en: "Savoury pancakes", fr: "Pancakes salés" },
          items: [
            {
              name: { pt: "Pancake salgada", en: "Savoury pancake", fr: "Pancake salé" },
              desc: { pt: "Tomate, ovo, salada, queijo fresco", en: "Tomato, egg, salad, fresh cheese", fr: "Tomate, œuf, salade, fromage frais" },
              price: "6,50 €"
            }
          ]
        },
        {
          title: { pt: "Crepes salgados", en: "Savoury crêpes", fr: "Crêpes salées" },
          items: [
            { name: { pt: "Frango e cogumelos", en: "Chicken & mushrooms", fr: "Poulet champignons" }, price: "6,50 €" },
            {
              name: { pt: "Philadelphia", en: "Philadelphia", fr: "Philadelphia" },
              desc: { pt: "Queijo, salsa, maionese", en: "Cheese, parsley, mayonnaise", fr: "Fromage, persil, mayonnaise" },
              price: "7,00 €"
            },
            { name: { pt: "Atum e queijo", en: "Tuna & cheese", fr: "Thon fromage" }, price: "6,50 €" }
          ]
        },
        {
          title: { pt: "Gratinados e quiches", en: "Gratins & quiches", fr: "Gratins et quiches" },
          items: [
            { name: { pt: "Gratinado do dia", en: "Gratin of the day", fr: "Gratin du jour" }, price: "8,00 €" },
            { name: { pt: "Quiche de espinafres e cogumelos", en: "Spinach & mushroom quiche", fr: "Quiche épinards champignons" }, price: "3,50 €" },
            { name: { pt: "Quiche de atum", en: "Tuna quiche", fr: "Quiche au thon" }, price: "3,50 €" },
            { name: { pt: "Quiche de frango", en: "Chicken quiche", fr: "Quiche au poulet" }, price: "3,50 €" }
          ]
        }
      ]
    },
    {
      id: "doces",
      label: { pt: "Doces", en: "Sweet", fr: "Sucré" },
      groups: [
        {
          title: { pt: "Pancakes doces", en: "Sweet pancakes", fr: "Pancakes sucrés" },
          items: [
            {
              name: { pt: "Pancake doce", en: "Sweet pancake", fr: "Pancake sucré" },
              desc: { pt: "Frutos vermelhos, chantilly e topping", en: "Red berries, whipped cream & topping", fr: "Fruits rouges, chantilly et topping" },
              price: "6,80 €"
            }
          ]
        },
        {
          title: { pt: "Crepes doces", en: "Sweet crêpes", fr: "Crêpes sucrées" },
          items: [
            { name: { pt: "Chocolate", en: "Chocolate", fr: "Chocolat" }, price: "5,50 €" },
            { name: { pt: "Banana", en: "Banana", fr: "Banane" }, price: "5,50 €" },
            { name: { pt: "Fruta e chantilly", en: "Fruit & whipped cream", fr: "Fruits chantilly" }, price: "5,50 €" },
            { name: { pt: "Gelado do dia", en: "Ice cream of the day", fr: "Glace du jour" }, price: "5,50 €" },
            { name: { pt: "Nutella", en: "Nutella", fr: "Nutella" }, price: "6,00 €" }
          ]
        },
        {
          title: { pt: "Waffles", en: "Waffles", fr: "Gaufres" },
          items: [
            { name: { pt: "Waffle de fruta", en: "Fruit waffle", fr: "Gaufre aux fruits" }, price: "4,00 €" },
            {
              name: { pt: "Waffle de chocolate", en: "Chocolate waffle", fr: "Gaufre au chocolat" },
              desc: { pt: "Topping extra +0,90 €", en: "Extra topping +0,90 €", fr: "Topping en plus +0,90 €" },
              price: "4,00 €"
            }
          ]
        },
        {
          title: { pt: "Sobremesas", en: "Desserts", fr: "Desserts" },
          items: [
            {
              name: { pt: "Tarte do dia", en: "Tart of the day", fr: "Tarte du jour" },
              desc: { pt: "Maçã, pêra ou limão", en: "Apple, pear or lemon", fr: "Pomme, poire ou citron" },
              price: "3,00 €"
            },
            {
              name: { pt: "Doces orientais — variedade do dia", en: "Oriental pastries — today's selection", fr: "Pâtisseries orientales — assortiment du jour" },
              price: null
            }
          ]
        }
      ]
    },
    {
      id: "bebidas",
      label: { pt: "Bebidas", en: "Drinks", fr: "Boissons" },
      groups: [
        {
          title: { pt: "Bebidas quentes", en: "Hot drinks", fr: "Boissons chaudes" },
          items: [
            { name: { pt: "Café", en: "Espresso", fr: "Café" }, price: "0,95 €" },
            { name: { pt: "Café duplo", en: "Double espresso", fr: "Café double" }, price: "1,90 €" },
            { name: { pt: "Galão", en: "Galão (milky coffee)", fr: "Galão (café au lait)" }, price: "1,50 €" },
            { name: { pt: "Cappuccino", en: "Cappuccino", fr: "Cappuccino" }, price: "2,80 €" },
            { name: { pt: "Chá", en: "Tea", fr: "Thé" }, price: "1,50 €" },
            { name: { pt: "Leite", en: "Milk", fr: "Lait" }, price: "1,10 €" }
          ]
        },
        {
          title: { pt: "Bebidas frescas", en: "Cold drinks", fr: "Boissons fraîches" },
          items: [
            { name: { pt: "Sumo de laranja natural", en: "Fresh orange juice", fr: "Jus d'orange pressé" }, price: "2,90 €" },
            { name: { pt: "Batido (baunilha ou chocolate)", en: "Milkshake (vanilla or chocolate)", fr: "Milkshake (vanille ou chocolat)" }, price: "3,90 €" },
            { name: { pt: "Mojito sem álcool", en: "Alcohol-free mojito", fr: "Mojito sans alcool" }, price: "3,90 €" },
            {
              name: { pt: "Refrigerantes e águas", en: "Soft drinks & water", fr: "Sodas et eaux" },
              desc: { pt: "Perguntar ao balcão", en: "Ask at the counter", fr: "Demander au comptoir" },
              price: null
            }
          ]
        }
      ]
    }
  ];

  /* ── Utilitaires ──────────────────────────────────────────────────── */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const LANG_KEY = "azul-lang";
  let currentLang = "pt";
  let activeTab = MENU[0].id;

  /* ── Langue : choix mémorisé, sinon portugais par défaut ──────────── */
  function detectLang() {
    const saved = localStorage.getItem(LANG_KEY);
    return saved && I18N[saved] ? saved : "pt";
  }

  /* ── Applique une langue à toute la page ──────────────────────────── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;

    const dict = I18N[lang];

    // Textes : tous les éléments portant data-i18n
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Attributs : data-i18n-attr="attribut:clé"
    $$("[data-i18n-attr]").forEach((el) => {
      const [attr, key] = el.getAttribute("data-i18n-attr").split(":");
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });

    // État visuel du sélecteur de langue
    $$(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    renderMenu();
    updateTodayHours();
  }

  /* ── Rendu du menu (onglets + panneaux) ───────────────────────────── */
  function renderMenu() {
    const tabsEl = $("#menu-tabs");
    const panelsEl = $("#menu-panels");
    if (!tabsEl || !panelsEl) return;

    tabsEl.innerHTML = "";
    panelsEl.innerHTML = "";

    MENU.forEach((cat) => {
      // Onglet
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "menu-tab";
      tab.id = "tab-" + cat.id;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", "panel-" + cat.id);
      tab.setAttribute("aria-selected", String(cat.id === activeTab));
      tab.tabIndex = cat.id === activeTab ? 0 : -1;
      tab.textContent = cat.label[currentLang];
      tab.addEventListener("click", () => selectTab(cat.id));
      tabsEl.appendChild(tab);

      // Panneau
      const panel = document.createElement("div");
      panel.className = "menu-panel";
      panel.id = "panel-" + cat.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", "tab-" + cat.id);
      if (cat.id !== activeTab) panel.hidden = true;

      cat.groups.forEach((group) => {
        const groupEl = document.createElement("div");
        groupEl.className = "menu-group";

        const titleEl = document.createElement("h3");
        titleEl.className = "menu-group-title";
        titleEl.textContent = group.title[currentLang];
        groupEl.appendChild(titleEl);

        group.items.forEach((item) => {
          const row = document.createElement("div");
          row.className = "menu-item";

          const nameEl = document.createElement("span");
          nameEl.className = "menu-item-name";
          nameEl.textContent = item.name[currentLang];
          if (item.desc) {
            const descEl = document.createElement("span");
            descEl.className = "menu-item-desc";
            descEl.textContent = item.desc[currentLang];
            nameEl.appendChild(descEl);
          }

          const dots = document.createElement("span");
          dots.className = "menu-item-dots";
          dots.setAttribute("aria-hidden", "true");

          const priceEl = document.createElement("span");
          priceEl.className = "menu-item-price";
          priceEl.textContent = item.price || "—";

          row.append(nameEl, dots, priceEl);
          groupEl.appendChild(row);
        });

        panel.appendChild(groupEl);
      });

      panelsEl.appendChild(panel);
    });

    // Navigation clavier entre onglets (flèches gauche/droite)
    tabsEl.addEventListener("keydown", onTabKeydown);
  }

  function selectTab(id) {
    activeTab = id;
    MENU.forEach((cat) => {
      const tab = $("#tab-" + cat.id);
      const panel = $("#panel-" + cat.id);
      const selected = cat.id === id;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panel.hidden = !selected;
    });
  }

  function onTabKeydown(e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const ids = MENU.map((c) => c.id);
    let idx = ids.indexOf(activeTab);
    idx = e.key === "ArrowRight" ? (idx + 1) % ids.length : (idx - 1 + ids.length) % ids.length;
    selectTab(ids[idx]);
    $("#tab-" + ids[idx]).focus();
  }

  /* ── Horaires du jour (bandeau + tableau) ─────────────────────────── */
  function updateTodayHours() {
    const dict = I18N[currentLang];
    const day = new Date().getDay(); // 0 = dimanche, 1 = lundi…
    const todayEl = $("#today-hours");
    if (todayEl) {
      todayEl.textContent = day === 1 ? dict["quick.closed"] : dict["quick.open"];
    }
    // Met en évidence la ligne du jour dans le tableau des horaires
    $$("#hours-table tr").forEach((tr) => {
      tr.classList.toggle("is-today", Number(tr.dataset.day) === day);
    });
  }

  /* ── Menu burger mobile ───────────────────────────────────────────── */
  function initBurger() {
    const nav = $(".nav");
    const burger = $("#burger");
    if (!nav || !burger) return;

    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });

    // Ferme le panneau après un clic sur un lien (mobile)
    $$(".nav-links a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      })
    );

    // Ferme avec la touche Échap
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        burger.focus();
      }
    });
  }

  /* ── Apparition en fondu au défilement ────────────────────────────── */
  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      document.documentElement.classList.add("no-observer");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      /* seuil bas + léger retrait en bas : fiable même pour les sections
         très hautes sur petit écran */
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    $$(".reveal").forEach((el) => observer.observe(el));
  }

  /* ── Secours images : si une photo externe ne charge pas, on affiche
       le visuel de marque local (assets/placeholder.svg). ────────────── */
  function initImageFallback() {
    $$("img.ph-img").forEach((img) => {
      img.addEventListener("error", () => {
        if (img.dataset.fallbackApplied) return; // évite une boucle si le SVG manquait aussi
        img.dataset.fallbackApplied = "true";
        img.src = "assets/placeholder.svg";
      });
      // L'événement error a pu partir avant l'attachement du listener
      if (img.complete && img.naturalWidth === 0) {
        img.dataset.fallbackApplied = "true";
        img.src = "assets/placeholder.svg";
      }
    });
  }

  /* ── Sélecteur de langue ──────────────────────────────────────────── */
  function initLangSwitch() {
    $$(".lang-btn").forEach((btn) =>
      btn.addEventListener("click", () => applyLang(btn.dataset.lang))
    );
  }

  /* ── Initialisation ───────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initLangSwitch();
    initImageFallback();
    applyLang(detectLang()); // rend aussi le menu et les horaires
    initReveal();

    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });
})();
