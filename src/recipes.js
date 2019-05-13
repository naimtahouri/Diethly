const recipes = [
    
    {
        id: '1',
        title: 'Salade de choux',
        category: 'healthy',
        likes: 4,
        dislikes: 1,
        images : 'https://github.com/naimtahouri/recipes-img/blob/master/salade.PNG?raw=true',
        etapes: ['1 - Commencer par préparer tous les ingrédients : découper les escalopes de veau en lamelles d’1 cm d’épaisseur. Détailler les poivrons en cubes en prenant soin de retirer les membranes blanches à l’intérieur ainsi que les graines.', ' 2 -Hacher l’ail et émincer les oignons nouveaux du bulbe jusqu’aux tiges. Réserver les tiges vertes dans un petit bol à côté.'],
    },
    {
        id: '2',
        title: 'Salade de lardons',
        category: 'healthy',
        likes: 4,
        dislikes: 1,
        images : 'https://github.com/naimtahouri/recipes-img/blob/master/IMG_5235.PNG?raw=true',
    },
    {
        id: '3',
        title: 'Salade de concombre',
        category: 'healthy',
        likes: 4,
        dislikes: 1,
        images : 'https://github.com/naimtahouri/recipes-img/blob/master/IMG_5242.PNG?raw=true',
    },
    {
        id: '4',
        title: 'Salade de pâtes',
        category: 'healthy',
        likes: 4,
        dislikes: 1,
        images : 'https://github.com/naimtahouri/recipes-img/blob/master/IMG_5246.PNG?raw=true',
    },
]

export const recipes$ = new Promise((resolve, reject) => setTimeout(resolve, 100, recipes))