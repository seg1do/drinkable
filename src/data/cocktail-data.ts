import { DrinkCategory } from 'domain/enums/drink-category';
import { Unit } from 'domain/enums/unit';
import { Cocktail, CocktailWithMissingIngredient, StaticCocktail } from 'domain/entities/cocktail';
import { Ingredient } from 'domain/entities/ingredient';
import { Tag } from './tags-data';

export function getStaticCocktails() {
    return [...cocktails];
}

export function toCocktailWithMissingIngredients(
    cocktail: Cocktail,
    ingredient: Ingredient
): CocktailWithMissingIngredient {
    return {
        category: cocktail.category,
        id: cocktail.id,
        imageSrc: cocktail.imageSrc,
        isImagePortrait: cocktail.isImagePortrait,
        ingredientGroups: cocktail.ingredientGroups,
        instructions: cocktail.instructions,
        missingIngredient: ingredient,
        translation: cocktail.translation,
        name: cocktail.name,
        isFavorite: cocktail.isFavorite,
        rating: cocktail.rating,
        tags: cocktail.tags
    };
}

const cocktails: StaticCocktail[] = [
    {
        id: '1',
        imageSrc: 'images/mojito.jpg',
        isImagePortrait: false,
        translation: 'mojito',
        category: DrinkCategory.Cocktail,
        instructions:
            'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
        ingredientGroups: [
            { amount: '40', ingredientId: '1', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '30', ingredientId: '3', unit: Unit.ML },
            { amount: '40', ingredientId: '4', unit: Unit.ML },
            { amount: '', ingredientId: '5', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '2',
        imageSrc: 'images/gin_tonic.jpg',
        isImagePortrait: false,
        translation: 'gin-&-tonic',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour the gin and tonic into a highball glass over ice cubes. Add the lime wedge and serve.',
        ingredientGroups: [
            { amount: '40', ingredientId: '6', unit: Unit.ML },
            { amount: '', ingredientId: '7', unit: '' }
        ],
        tags: []
    },
    {
        id: '3',
        imageSrc: 'images/bloody_mary.jpg',
        isImagePortrait: false,
        translation: 'bloody-mary',
        category: DrinkCategory.Cocktail,
        instructions: 'Stirring gently, pour all ingredients into highball glass. Garnish.',
        ingredientGroups: [
            { amount: '40', ingredientId: '8', unit: Unit.ML },
            { amount: '120', ingredientId: '9', unit: Unit.ML },
            { amount: '20', ingredientId: '10', unit: Unit.ML },
            { amount: '10', ingredientId: '3', unit: Unit.ML },
            { amount: '', ingredientId: '11', unit: '' },
            { amount: '', ingredientId: '12', unit: '' },
            { amount: '', ingredientId: '13', unit: '' },
            { amount: '', ingredientId: '14', unit: '' },
            { amount: '', ingredientId: '15', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '4',
        imageSrc: 'images/cosmopolitan.jpg',
        isImagePortrait: true,
        translation: 'cosmopolitan',
        category: DrinkCategory.Cocktail,
        instructions:
            'Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '20', ingredientId: '19', unit: Unit.ML },
            { amount: '20', ingredientId: '17', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '5',
        imageSrc: 'images/margarita.jpg',
        isImagePortrait: true,
        translation: 'margarita',
        category: DrinkCategory.Cocktail,
        instructions:
            'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
        ingredientGroups: [
            { amount: '40', ingredientId: '18', unit: Unit.ML },
            { amount: '20', ingredientId: '19', unit: Unit.ML },
            { amount: '20', ingredientId: '2', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '6',
        imageSrc: 'images/strawberry_daiquiri.jpg',
        isImagePortrait: false,
        translation: 'frozen-strawberry-daiquiri',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
        ingredientGroups: [
            { amount: '50', ingredientId: '1', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '30', ingredientId: '3', unit: Unit.ML },
            { amount: '150', ingredientId: '20', unit: Unit.G }
        ],
        tags: []
    },
    {
        id: '7',
        imageSrc: 'images/amaretto_sour.jpg',
        isImagePortrait: false,
        translation: 'amaretto-sour',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake and strain. Garnish with a cherry and an orange slice.',
        ingredientGroups: [
            { amount: '50', ingredientId: '22', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '20', ingredientId: '3', unit: Unit.ML },
            { amount: '1', ingredientId: '23', unit: '' }
        ],
        tags: []
    },
    {
        id: '8',
        imageSrc: 'images/moscow_mule.jpg',
        isImagePortrait: false,
        translation: 'moscow-mule',
        category: DrinkCategory.Cocktail,
        instructions:
            'Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.',
        ingredientGroups: [
            { amount: '40', ingredientId: '8', unit: Unit.ML },
            { amount: '20', ingredientId: '2', unit: Unit.ML },
            { amount: '100', ingredientId: '24', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '9',
        imageSrc: 'images/pina_colada.jpg',
        isImagePortrait: true,
        translation: 'pina-colada',
        category: DrinkCategory.Cocktail,
        instructions: 'Mix with crushed ice in a shaker. Pour into chilled glass, garnish and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '1', unit: Unit.ML },
            { amount: '60', ingredientId: '25', unit: Unit.ML },
            { amount: '60', ingredientId: '26', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '10',
        imageSrc: 'images/whiskey_sour.jpg',
        isImagePortrait: false,
        translation: 'whiskey-sour',
        category: DrinkCategory.Cocktail,
        instructions:
            "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
        ingredientGroups: [
            { amount: '50', ingredientId: '28', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '20', ingredientId: '3', unit: Unit.ML },
            { amount: '1', ingredientId: '23', unit: '' },
            { amount: '', ingredientId: '27', unit: '' }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '11',
        imageSrc: 'images/pink_lady.jpg',
        isImagePortrait: false,
        translation: 'pink-lady',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake with ice. Strain into chilled glass and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '6', unit: Unit.ML },
            { amount: '20', ingredientId: '19', unit: Unit.ML },
            { amount: '20', ingredientId: '10', unit: Unit.ML },
            { amount: '20', ingredientId: '30', unit: Unit.ML },
            { amount: '1', ingredientId: '23', unit: '' }
        ],
        tags: []
    },
    {
        id: '12',
        imageSrc: 'images/gin_sour.jpg',
        isImagePortrait: false,
        translation: 'gin-sour',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a shaker half-filled with ice cubes, combine the ingredients. Shake well. Strain into a sour glass and garnish with an orange slice',
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '20', ingredientId: '3', unit: Unit.ML },
            { amount: '1', ingredientId: '23', unit: '' }
        ],
        tags: []
    },
    {
        id: '13',
        imageSrc: 'images/dry_martini.jpg',
        isImagePortrait: false,
        translation: 'dry-martini',
        category: DrinkCategory.Cocktail,
        instructions:
            'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Garnish with olive.',
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '10', ingredientId: '31', unit: Unit.ML },
            { amount: '', ingredientId: '32', unit: '' }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '14',
        imageSrc: 'images/hot_shot.jpg',
        isImagePortrait: false,
        translation: 'hot-shot',
        category: DrinkCategory.Shot,
        instructions:
            'Pour Galliano into a shot glass. Using the backside of a spoon, carefully pour coffee on top of the liqueur. Finally to top it off, use the backside of the spoon again to slowly pour the whipped cream on top.',
        ingredientGroups: [
            { amount: '20', ingredientId: '33', unit: Unit.ML },
            { amount: '20', ingredientId: '34', unit: Unit.ML },
            { amount: '20', ingredientId: '35', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '15',
        imageSrc: 'images/placeholder.jpg',
        isImagePortrait: false,
        translation: 'frozen-margarita',
        category: DrinkCategory.Cocktail,
        instructions:
            'Combine all ingredients in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a highball glass, garnish with lime slice, and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '18', unit: Unit.ML },
            { amount: '20', ingredientId: '19', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '20', ingredientId: '3', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '16',
        imageSrc: 'images/negroni.jpg',
        isImagePortrait: false,
        translation: 'negroni',
        category: DrinkCategory.Cocktail,
        instructions: 'Stir into glass over ice, garnish and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '36', unit: Unit.ML },
            { amount: '30', ingredientId: '37', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '17',
        imageSrc: 'images/daiquiri.jpg',
        isImagePortrait: false,
        translation: 'daiquiri',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
        ingredientGroups: [
            { amount: '60', ingredientId: '1', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '1', ingredientId: '16', unit: Unit.TBSP }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '18',
        imageSrc: 'images/after_dinner_cocktail.jpg',
        isImagePortrait: false,
        translation: 'after-dinner-cocktail',
        category: DrinkCategory.Cocktail,
        instructions:
            'Shake all ingredients (except lime wedge) with ice and strain into a cocktail glass. Add the wedge of lime and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '29', unit: Unit.ML },
            { amount: '30', ingredientId: '38', unit: Unit.ML },
            { amount: '60', ingredientId: '2', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '19',
        imageSrc: 'images/manhattan.jpg',
        isImagePortrait: false,
        translation: 'manhattan',
        category: DrinkCategory.Cocktail,
        instructions:
            'Stirred over ice, strained into a chilled glass, garnish with cherry and orange peel, and served up.',
        ingredientGroups: [
            { amount: '30', ingredientId: '37', unit: Unit.ML },
            { amount: '80', ingredientId: '28', unit: Unit.ML },
            { amount: '', ingredientId: '27', unit: '' }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '20',
        imageSrc: 'images/alabama_slammer.jpg',
        isImagePortrait: false,
        translation: 'alabama-slammer',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour all ingredients (except for lemon juice) over ice in a highball glass. Stir, add a dash of lemon juice, and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '39', unit: Unit.ML },
            { amount: '30', ingredientId: '22', unit: Unit.ML },
            { amount: '20', ingredientId: '40', unit: Unit.ML },
            { amount: '', ingredientId: '2', unit: '' }
        ],
        tags: []
    },
    {
        id: '21',
        imageSrc: 'images/irish_coffee.jpg',
        isImagePortrait: false,
        translation: 'irish-coffee',
        category: DrinkCategory.Cocktail,
        instructions: 'Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.',
        ingredientGroups: [
            { amount: '45', ingredientId: '41', unit: Unit.ML },
            { amount: '240', ingredientId: '34', unit: Unit.ML },
            { amount: '1', ingredientId: '42', unit: Unit.TSP },
            { amount: '', ingredientId: '35', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '22',
        imageSrc: 'images/black_russian.jpg',
        isImagePortrait: false,
        translation: 'black-russian',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.',
        ingredientGroups: [
            { amount: '45', ingredientId: '8', unit: Unit.ML },
            { amount: '30', ingredientId: '43', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '23',
        imageSrc: 'images/blackthorn.jpg',
        isImagePortrait: false,
        translation: 'blackthorn',
        category: DrinkCategory.Cocktail,
        instructions:
            'Stir sloe gin and vermouth with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '37', unit: Unit.ML },
            { amount: '45', ingredientId: '40', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '24',
        imageSrc: 'images/blue_lagoon.jpg',
        isImagePortrait: false,
        translation: 'blue-lagoon',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour vodka and curacao over ice in a highball glass. Fill with Sprite, top with the cherry, and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '30', ingredientId: '44', unit: Unit.ML },
            { amount: '', ingredientId: '45', unit: '' }
        ],
        tags: []
    },
    {
        id: '25',
        imageSrc: 'images/blue_margarita.jpg',
        isImagePortrait: false,
        translation: 'blue-margarita',
        category: DrinkCategory.Cocktail,
        instructions:
            'Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '18', unit: Unit.ML },
            { amount: '30', ingredientId: '44', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '', ingredientId: '46', unit: '' }
        ],
        tags: []
    },
    {
        id: '26',
        imageSrc: 'images/alexander.jpg',
        isImagePortrait: false,
        translation: 'alexander',
        category: DrinkCategory.Cocktail,
        instructions:
            'Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '47', unit: Unit.ML },
            { amount: '30', ingredientId: '48', unit: Unit.ML },
            { amount: '', ingredientId: '49', unit: '' }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '27',
        imageSrc: 'images/brandy_alexander.jpg',
        isImagePortrait: false,
        translation: 'brandy-alexander',
        category: DrinkCategory.Cocktail,
        instructions:
            'Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '50', unit: Unit.ML },
            { amount: '30', ingredientId: '47', unit: Unit.ML },
            { amount: '30', ingredientId: '48', unit: Unit.ML },
            { amount: '', ingredientId: '49', unit: '' }
        ],
        tags: []
    },
    {
        id: '28',
        imageSrc: 'images/alfie_cocktail.jpg',
        isImagePortrait: false,
        translation: 'alfie-cocktail',
        category: DrinkCategory.Cocktail,
        instructions: 'Combine and shake all ingredients with ice, strain into a cocktail glass, and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '51', unit: Unit.ML },
            { amount: '20', ingredientId: '38', unit: Unit.ML },
            { amount: '30', ingredientId: '26', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '29',
        imageSrc: 'images/algonquin.jpg',
        isImagePortrait: false,
        translation: 'algonquin',
        category: DrinkCategory.Cocktail,
        instructions: 'Combine and shake all ingredients with ice, strain contents into a cocktail glass, and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '52', unit: Unit.ML },
            { amount: '30', ingredientId: '31', unit: Unit.ML },
            { amount: '30', ingredientId: '26', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '30',
        imageSrc: 'images/allegheny.jpg',
        isImagePortrait: false,
        translation: 'allegheny',
        category: DrinkCategory.Cocktail,
        instructions:
            'Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '31', unit: Unit.ML },
            { amount: '30', ingredientId: '28', unit: Unit.ML },
            { amount: '75', ingredientId: '26', unit: Unit.ML },
            { amount: '75', ingredientId: '10', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '31',
        imageSrc: 'images/almeria.jpg',
        isImagePortrait: false,
        translation: 'almeria',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.',
        ingredientGroups: [
            { amount: '60', ingredientId: '54', unit: Unit.ML },
            { amount: '30', ingredientId: '55', unit: Unit.ML },
            { amount: '1', ingredientId: '23', unit: '' }
        ],
        tags: []
    },
    {
        id: '32',
        imageSrc: 'images/almond_joy.jpg',
        isImagePortrait: false,
        translation: 'almond-joy',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake all ingredients with ice, strain into a cocktail glass, and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '22', unit: Unit.ML },
            { amount: '30', ingredientId: '47', unit: Unit.ML },
            { amount: '60', ingredientId: '48', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '33',
        imageSrc: 'images/amaretto_rose.jpg',
        isImagePortrait: false,
        translation: 'amaretto-rose',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour amaretto and lime juice over ice in a collins glass. Fill with soda water and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '22', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: []
    },
    {
        id: '34',
        imageSrc: 'images/balmoral.jpg',
        isImagePortrait: false,
        translation: 'balmoral',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.',
        ingredientGroups: [
            { amount: '45', ingredientId: '56', unit: Unit.ML },
            { amount: '15', ingredientId: '37', unit: Unit.ML },
            { amount: '15', ingredientId: '31', unit: Unit.ML },
            { amount: '', ingredientId: '27', unit: '' }
        ],
        tags: []
    },
    {
        id: '35',
        imageSrc: 'images/bermuda_highball.jpg',
        isImagePortrait: false,
        translation: 'bermuda-highball',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for soda water, if preferred.',
        ingredientGroups: [
            { amount: '30', ingredientId: '50', unit: Unit.ML },
            { amount: '30', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '31', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: []
    },
    {
        id: '36',
        imageSrc: 'images/bluebird.jpg',
        isImagePortrait: false,
        translation: 'bluebird',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry.',
        ingredientGroups: [
            { amount: '45', ingredientId: '6', unit: Unit.ML },
            { amount: '15', ingredientId: '38', unit: Unit.ML },
            { amount: '15', ingredientId: '44', unit: Unit.ML },
            { amount: '', ingredientId: '27', unit: '' }
        ],
        tags: []
    },
    {
        id: '37',
        imageSrc: 'images/boxcar.jpg',
        isImagePortrait: false,
        translation: 'boxcar',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.',
        ingredientGroups: [
            { amount: '45', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '38', unit: Unit.ML },
            { amount: '45', ingredientId: '10', unit: Unit.ML },
            { amount: '30', ingredientId: '30', unit: Unit.ML },
            { amount: '1', ingredientId: '23', unit: '' }
        ],
        tags: []
    },
    {
        id: '38',
        imageSrc: 'images/california_lemonade.jpg',
        isImagePortrait: false,
        translation: 'california-lemonade',
        category: DrinkCategory.Cocktail,
        instructions:
            'Shake all ingredients (except carbonated water) with ice and strain into a collins glass over shaved ice. Fill with carbonated water and stir. Decorate with slices of orange and lemon. Add the cherry and serve with a straw.',
        ingredientGroups: [
            { amount: '60', ingredientId: '52', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '1', ingredientId: '16', unit: Unit.TBSP },
            { amount: '15', ingredientId: '30', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '39',
        imageSrc: 'images/casino_royale.jpg',
        isImagePortrait: false,
        translation: 'casino-royale',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.',
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '15', ingredientId: '10', unit: Unit.ML },
            { amount: '1', ingredientId: '57', unit: Unit.TSP },
            { amount: '', ingredientId: '58', unit: '' },
            { amount: '1', ingredientId: '59', unit: '' }
        ],
        tags: []
    },
    {
        id: '40',
        imageSrc: 'images/champagne_cocktail.jpg',
        isImagePortrait: false,
        translation: 'champagne-cocktail',
        category: DrinkCategory.Cocktail,
        instructions:
            'Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.',
        ingredientGroups: [
            { amount: '', ingredientId: '60', unit: '' },
            { amount: '', ingredientId: '42', unit: '' },
            { amount: '', ingredientId: '27', unit: '' },
            { amount: '', ingredientId: '61', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '41',
        imageSrc: 'images/chocolate_black_russian.jpg',
        isImagePortrait: false,
        translation: 'chocolate-black-russian',
        category: DrinkCategory.Cocktail,
        instructions:
            'Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '55', unit: Unit.ML },
            { amount: '15', ingredientId: '8', unit: Unit.ML },
            { amount: '10', ingredientId: '62', unit: Unit.TBSP }
        ],
        tags: []
    },
    {
        id: '42',
        imageSrc: 'images/city_slicker.jpg',
        isImagePortrait: false,
        translation: 'city-slicker',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.',
        ingredientGroups: [
            { amount: '60', ingredientId: '50', unit: Unit.ML },
            { amount: '15', ingredientId: '38', unit: Unit.ML },
            { amount: '1', ingredientId: '10', unit: Unit.TBSP }
        ],
        tags: []
    },
    {
        id: '43',
        imageSrc: 'images/cuba_libre.jpg',
        isImagePortrait: false,
        translation: 'cuba-libre',
        category: DrinkCategory.Cocktail,
        instructions: 'Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.',
        ingredientGroups: [
            { amount: '60', ingredientId: '1', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML },
            { amount: '', ingredientId: '63', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '44',
        imageSrc: 'images/foxy_lady.jpg',
        isImagePortrait: false,
        translation: 'foxy-lady',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.',
        ingredientGroups: [
            { amount: '15', ingredientId: '22', unit: Unit.ML },
            { amount: '15', ingredientId: '47', unit: Unit.ML },
            { amount: '60', ingredientId: '48', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '45',
        imageSrc: 'images/harvey_wallbanger.jpg',
        isImagePortrait: false,
        translation: 'harvey-wallbanger',
        category: DrinkCategory.Cocktail,
        instructions:
            'Stir the vodka and orange juice with ice in the glass, then float the Galliano on top. Garnish and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '15', ingredientId: '33', unit: Unit.ML },
            { amount: '120', ingredientId: '64', unit: Unit.ML }
        ],
        tags: [Tag.FormerIBA]
    },
    {
        id: '46',
        imageSrc: 'images/havana_cocktail.jpg',
        isImagePortrait: false,
        translation: 'havana-cocktail',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.',
        ingredientGroups: [
            { amount: '30', ingredientId: '1', unit: Unit.ML },
            { amount: '30', ingredientId: '26', unit: Unit.ML },
            { amount: '1', ingredientId: '10', unit: Unit.TSP }
        ],
        tags: []
    },
    {
        id: '47',
        imageSrc: 'images/jack_rose_cocktail.jpg',
        isImagePortrait: false,
        translation: 'jack-rose-cocktail',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake all ingredients with ice, strain into a cocktail glass, and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '65', unit: Unit.ML },
            { amount: '1', ingredientId: '30', unit: Unit.TSP },
            { amount: '15', ingredientId: '2', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '48',
        imageSrc: 'images/kamikaze.jpg',
        isImagePortrait: false,
        translation: 'kamikaze',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake all ingredients together with ice. Strain into glass, garnish and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '30', ingredientId: '38', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML }
        ],
        tags: [Tag.FormerIBA]
    },
    {
        id: '49',
        imageSrc: 'images/mai_tai.jpg',
        isImagePortrait: false,
        translation: 'mai-tai',
        category: DrinkCategory.Cocktail,
        instructions:
            'Shake light rum, orange liqueur, orgeat syrup, and Sweet & Sour mix with ice. Strain into a glass and add dark rum. Finish with some garnish and serve with a straw.',
        ingredientGroups: [
            { amount: '20', ingredientId: '1', unit: Unit.ML },
            { amount: '15', ingredientId: '38', unit: Unit.ML },
            { amount: '15', ingredientId: '66', unit: Unit.ML },
            { amount: '45', ingredientId: '67', unit: Unit.ML },
            { amount: '10', ingredientId: '54', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '50',
        imageSrc: 'images/screwdriver.jpg',
        isImagePortrait: false,
        translation: 'screwdriver',
        category: DrinkCategory.Cocktail,
        instructions: 'Mix in a highball glass with ice. Garnish and serve.',
        ingredientGroups: [
            { amount: '60', ingredientId: '8', unit: Unit.ML },
            { amount: '', ingredientId: '64', unit: '' }
        ],
        tags: [Tag.FormerIBA]
    },
    {
        id: '51',
        imageSrc: 'images/sloe_gin_cocktail.jpg',
        isImagePortrait: false,
        translation: 'sloe-gin-cocktail',
        category: DrinkCategory.Cocktail,
        instructions: 'Stir all ingredients with ice, strain into a cocktail glass, and serve.',
        ingredientGroups: [
            { amount: '60', ingredientId: '40', unit: Unit.ML },
            { amount: '20', ingredientId: '31', unit: Unit.ML },
            { amount: '', ingredientId: '58', unit: '' }
        ],
        tags: []
    },
    {
        id: '52',
        imageSrc: 'images/stone_sour.jpg',
        isImagePortrait: false,
        translation: 'stone-sour',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '29', unit: Unit.ML },
            { amount: '30', ingredientId: '64', unit: Unit.ML },
            { amount: '10', ingredientId: '67', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '53',
        imageSrc: 'images/tequila_sour.jpg',
        isImagePortrait: false,
        translation: 'tequila-sour',
        category: DrinkCategory.Cocktail,
        instructions:
            'Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.',
        ingredientGroups: [
            { amount: '60', ingredientId: '18', unit: Unit.ML },
            { amount: '60', ingredientId: '10', unit: Unit.ML },
            { amount: '1', ingredientId: '16', unit: Unit.TSP }
        ],
        tags: []
    },
    {
        id: '54',
        imageSrc: 'images/tom_collins.jpg',
        isImagePortrait: false,
        translation: 'tom-collins',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass alomst filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.',
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '1', ingredientId: '42', unit: Unit.TSP },
            { amount: '90', ingredientId: '4', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '55',
        imageSrc: 'images/valencia_cocktail.jpg',
        isImagePortrait: false,
        translation: 'valencia-cocktail',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake all ingredients with ice, strain into a cocktail glass, and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '29', unit: Unit.ML },
            { amount: '30', ingredientId: '64', unit: Unit.ML },
            { amount: '', ingredientId: '58', unit: '' }
        ],
        tags: []
    },
    {
        id: '56',
        imageSrc: 'images/vermouth_cassis.jpg',
        isImagePortrait: false,
        translation: 'vermouth-cassis',
        category: DrinkCategory.Cocktail,
        instructions:
            'Stir vermouth and creme de cassis in a highball glass with ice cubes. Fill with carbonated water, stir again, and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '31', unit: Unit.ML },
            { amount: '30', ingredientId: '68', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: []
    },
    {
        id: '57',
        imageSrc: 'images/sex_on_the_beach.jpg',
        isImagePortrait: false,
        translation: 'sex-on-the-beach',
        category: DrinkCategory.Cocktail,
        instructions: 'Build all ingredients in a highball glass filled with ice. Garnish with orange slice.',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '30', ingredientId: '69', unit: Unit.ML },
            { amount: '', ingredientId: '17', unit: '' },
            { amount: '', ingredientId: '70', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '58',
        imageSrc: 'images/tequila_sunrise.jpg',
        isImagePortrait: false,
        translation: 'tequila-sunrise',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.',
        ingredientGroups: [
            { amount: '60', ingredientId: '18', unit: Unit.ML },
            { amount: '', ingredientId: '64', unit: '' },
            { amount: '', ingredientId: '30', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '59',
        imageSrc: 'images/mimosa.jpg',
        isImagePortrait: false,
        translation: 'mimosa',
        category: DrinkCategory.Cocktail,
        instructions: 'Ensure both ingredients are well chilled, then mix into the glass. Serve cold.',
        ingredientGroups: [
            { amount: '', ingredientId: '60', unit: '' },
            { amount: '60', ingredientId: '64', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '60',
        imageSrc: 'images/dark_and_stormy.jpg',
        isImagePortrait: false,
        translation: 'dark-and-stormy',
        category: DrinkCategory.Cocktail,
        instructions:
            'Fill highball glass (image shows a lowball glass) with ice, fill almost to the top with ginger beer, softly pour the dark rum on top to make it float. Garnish with lime. Serve with straw.',
        ingredientGroups: [
            { amount: '60', ingredientId: '54', unit: Unit.ML },
            { amount: '90', ingredientId: '24', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '61',
        imageSrc: 'images/happy_skipper.jpg',
        isImagePortrait: false,
        translation: 'happy-skipper',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour Spiced Rum over ice, fill glass to top with Ginger Ale. Garnish with lime.',
        ingredientGroups: [
            { amount: '15', ingredientId: '21', unit: Unit.ML },
            { amount: '', ingredientId: '24', unit: '' },
            { amount: '', ingredientId: '2', unit: '' }
        ],
        tags: []
    },
    {
        id: '62',
        imageSrc: 'images/brave_bull_shooter.jpg',
        isImagePortrait: false,
        translation: 'brave-bull-shooter',
        category: DrinkCategory.Shot,
        instructions: 'Pour Tabasco into bottom of shot glass and fill with tequila.',
        ingredientGroups: [
            { amount: '15', ingredientId: '18', unit: Unit.ML },
            { amount: '15', ingredientId: '11', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '63',
        imageSrc: 'images/at&t.jpg',
        isImagePortrait: false,
        translation: 'at&t',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour Vodka and Gin over ice, add Tonic and Stir',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '30', ingredientId: '6', unit: Unit.ML },
            { amount: '120', ingredientId: '7', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '64',
        imageSrc: 'images/belgian_blue.jpg',
        isImagePortrait: false,
        translation: 'belgian-blue',
        category: DrinkCategory.Cocktail,
        instructions: 'Just pour all ingredients in the glass and stir.',
        ingredientGroups: [
            { amount: '20', ingredientId: '8', unit: Unit.ML },
            { amount: '10', ingredientId: '71', unit: Unit.ML },
            { amount: '10', ingredientId: '44', unit: Unit.ML },
            { amount: '10', ingredientId: '45', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '65',
        imageSrc: 'images/grand_blue.jpg',
        isImagePortrait: false,
        translation: 'grand-blue',
        category: DrinkCategory.Cocktail,
        instructions: 'Serve in an old fashioned glass.',
        ingredientGroups: [
            { amount: '15', ingredientId: '72', unit: Unit.ML },
            { amount: '15', ingredientId: '69', unit: Unit.ML },
            { amount: '15', ingredientId: '44', unit: Unit.ML },
            { amount: '30', ingredientId: '67', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '66',
        imageSrc: 'images/americano.jpg',
        isImagePortrait: false,
        translation: 'americano',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.',
        ingredientGroups: [
            { amount: '30', ingredientId: '36', unit: Unit.ML },
            { amount: '30', ingredientId: '37', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '67',
        imageSrc: 'images/campari_beer.jpg',
        isImagePortrait: false,
        translation: 'campari-beer',
        category: DrinkCategory.Cocktail,
        instructions: 'Use a beer mug. Add Campari first. Fill with beer.',
        ingredientGroups: [
            { amount: '15', ingredientId: '36', unit: Unit.ML },
            { amount: '', ingredientId: '73', unit: '' }
        ],
        tags: []
    },
    {
        id: '68',
        imageSrc: 'images/moranguito.jpg',
        isImagePortrait: false,
        translation: 'moranguito',
        category: DrinkCategory.Cocktail,
        instructions: 'First you put the absinthe, then put tequila, then put the Granadine syrup.',
        ingredientGroups: [
            { amount: '20', ingredientId: '74', unit: Unit.ML },
            { amount: '20', ingredientId: '18', unit: Unit.ML },
            { amount: '10', ingredientId: '30', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '69',
        imageSrc: 'images/swedish_blueberry_shot.jpg',
        isImagePortrait: false,
        translation: 'swedish-blueberry-shot',
        category: DrinkCategory.Shot,
        instructions:
            'Pour Licor 43 into a shot glass. Using the backside of a spoon, carefully pour blueberry juice on top of the liqueur. Finally to top it off, use the backside of the spoon again to slowly pour the whipped cream on top.',
        ingredientGroups: [
            { amount: '20', ingredientId: '75', unit: Unit.ML },
            { amount: '20', ingredientId: '76', unit: Unit.ML },
            { amount: '20', ingredientId: '35', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '70',
        imageSrc: 'images/pink_panther.jpg',
        isImagePortrait: true,
        translation: 'pink-panther',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour all ingredients in a shaker with ice. Shake well. Strain into a glass.',
        ingredientGroups: [
            { amount: '20', ingredientId: '8', unit: Unit.ML },
            { amount: '20', ingredientId: '75', unit: Unit.ML },
            { amount: '15', ingredientId: '30', unit: Unit.ML },
            { amount: '120', ingredientId: '77', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '71',
        imageSrc: 'images/arizona_antifreeze.jpg',
        isImagePortrait: false,
        translation: 'arizona-antifreeze',
        category: DrinkCategory.Shot,
        instructions: 'Pour all ingredients into shot glass and slam.',
        ingredientGroups: [
            { amount: '10', ingredientId: '8', unit: Unit.ML },
            { amount: '10', ingredientId: '78', unit: Unit.ML },
            { amount: '10', ingredientId: '67', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '72',
        imageSrc: 'images/gt_blue.jpg',
        isImagePortrait: false,
        translation: 'gt-blue',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour the gin, blue curacao and tonic into a highball glass over ice cubes. Garnish with a lemon slice and serve.',
        ingredientGroups: [
            { amount: '45', ingredientId: '6', unit: Unit.ML },
            { amount: '15', ingredientId: '44', unit: Unit.ML },
            { amount: '', ingredientId: '7', unit: '' }
        ],
        tags: []
    },
    {
        id: '73',
        imageSrc: 'images/melon_sour.jpg',
        isImagePortrait: false,
        translation: 'melon-sour',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour all ingredients into shaker with ice cubes. Shake well. Strain in a rocks glass filled with ice cubes.',
        ingredientGroups: [
            { amount: '60', ingredientId: '78', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '15', ingredientId: '3', unit: Unit.ML },
            { amount: '1', ingredientId: '23', unit: '' }
        ],
        tags: []
    },
    {
        id: '74',
        imageSrc: 'images/zorbatini.jpg',
        isImagePortrait: false,
        translation: 'zorbatini',
        category: DrinkCategory.Cocktail,
        instructions: 'Prepare like a Martini. Garnish with a green olive.',
        ingredientGroups: [
            { amount: '40', ingredientId: '8', unit: Unit.ML },
            { amount: '10', ingredientId: '79', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '75',
        imageSrc: 'images/ruby_tuesday.jpg',
        isImagePortrait: false,
        translation: 'ruby-tuesday',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour gin and cranberry into a highball filled with ice cubes. Add grenadine and stir.',
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '', ingredientId: '17', unit: '' },
            { amount: '', ingredientId: '30', unit: '' }
        ],
        tags: []
    },
    {
        id: '76',
        imageSrc: 'images/espresso_martini.jpg',
        isImagePortrait: false,
        translation: 'espresso-martini',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass',
        ingredientGroups: [
            { amount: '40', ingredientId: '8', unit: Unit.ML },
            { amount: '10', ingredientId: '55', unit: Unit.ML },
            { amount: '10', ingredientId: '3', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '77',
        imageSrc: 'images/english_highball.jpg',
        isImagePortrait: false,
        translation: 'english-highball',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with soda water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)',
        ingredientGroups: [
            { amount: '20', ingredientId: '50', unit: Unit.ML },
            { amount: '20', ingredientId: '6', unit: Unit.ML },
            { amount: '20', ingredientId: '37', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: []
    },
    {
        id: '78',
        imageSrc: 'images/english_rose_cocktail.jpg',
        isImagePortrait: false,
        translation: 'english-rose-cocktail',
        category: DrinkCategory.Cocktail,
        instructions:
            'Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.',
        ingredientGroups: [
            { amount: '20', ingredientId: '29', unit: Unit.ML },
            { amount: '40', ingredientId: '6', unit: Unit.ML },
            { amount: '20', ingredientId: '31', unit: Unit.ML },
            { amount: '30', ingredientId: '30', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '79',
        imageSrc: 'images/imperial_cocktail.jpg',
        isImagePortrait: false,
        translation: 'imperial-cocktail',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake with ice and strain into cocktail glass.',
        ingredientGroups: [
            { amount: '40', ingredientId: '2', unit: Unit.ML },
            { amount: '20', ingredientId: '6', unit: Unit.ML },
            { amount: '40', ingredientId: '80', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '80',
        imageSrc: 'images/irish_spring.jpg',
        isImagePortrait: false,
        translation: 'irish-spring',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour all ingredients into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.',
        ingredientGroups: [
            { amount: '30', ingredientId: '41', unit: Unit.ML },
            { amount: '15', ingredientId: '81', unit: Unit.ML },
            { amount: '30', ingredientId: '64', unit: Unit.ML },
            { amount: '30', ingredientId: '67', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '81',
        imageSrc: 'images/kiwi_martini.jpg',
        isImagePortrait: false,
        translation: 'kiwi-martini',
        category: DrinkCategory.Cocktail,
        instructions:
            'The kiwi martini is a very fun vodka cocktail and it is one of the best drinks that makes use of fresh fruit. Though there are a few recipes floating around, this is one of the easiest and it is an absolutely delightful green martini to drink. For this recipe, you simply muddle slices of kiwi with simple syrup, then shake it with vodka. It is a drink that anyone can mix up in minutes and a perfect cocktail to show off your favorite vodka.',
        ingredientGroups: [
            { amount: '1', ingredientId: '82', unit: '' },
            { amount: '1', ingredientId: '3', unit: Unit.TSP },
            { amount: '45', ingredientId: '8', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '82',
        imageSrc: 'images/lazy_coconut_paloma.jpg',
        isImagePortrait: false,
        translation: 'lazy-coconut-paloma',
        category: DrinkCategory.Cocktail,
        instructions:
            'Mix the coconut liqueur (preferably tequila) with the grapefruit juice and top with soda water. Garnish with a large grapefruit slice against the inside of the glass.',
        ingredientGroups: [
            { amount: '30', ingredientId: '71', unit: Unit.ML },
            { amount: '75', ingredientId: '70', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: []
    },
    {
        id: '83',
        imageSrc: 'images/lemon_elderflower_spritzer.jpg',
        isImagePortrait: false,
        translation: 'lemon-elderflower-spritzer',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour all ingredients over ice, stir and enjoy!',
        ingredientGroups: [
            { amount: '2', ingredientId: '83', unit: Unit.TSP },
            { amount: '60', ingredientId: '8', unit: Unit.ML },
            { amount: '75', ingredientId: '4', unit: Unit.ML },
            { amount: '15', ingredientId: '10', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '84',
        imageSrc: 'images/orange_crush.jpg',
        isImagePortrait: false,
        translation: 'orange-crush',
        category: DrinkCategory.Shot,
        instructions: 'Add all ingredients to tumbler-Pour as shot',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '30', ingredientId: '38', unit: Unit.ML },
            { amount: '30', ingredientId: '64', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '85',
        imageSrc: 'images/mountain_bramble.jpg',
        isImagePortrait: false,
        translation: 'mountain-bramble',
        category: DrinkCategory.Cocktail,
        instructions:
            'Muddle blackberries in a tumbler glass. Mix the Gin, lemon juice and sugar syrup in a shaker and strain over chopped ice. Top with Soda water and garnish with more blackberries and some mint',
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '20', ingredientId: '10', unit: Unit.ML },
            { amount: '20', ingredientId: '3', unit: Unit.ML },
            { amount: '', ingredientId: '84', unit: '' },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: []
    },
    {
        id: '86',
        imageSrc: 'images/gin_swizzle.jpg',
        isImagePortrait: false,
        translation: 'gin-swizzle',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a shaker half-filled with ice cubes, combine the lime juice, sugar, gin, and bitters. Shake well. Almost fill a colling glass with ice cubes. Stir until the glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.',
        ingredientGroups: [
            { amount: '40', ingredientId: '2', unit: Unit.ML },
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '1', ingredientId: '42', unit: Unit.TSP },
            { amount: '', ingredientId: '27', unit: '' },
            { amount: '90', ingredientId: '4', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '87',
        imageSrc: 'images/cocktail_horses_neck.jpg',
        isImagePortrait: false,
        translation: 'cocktail-horses-neck',
        category: DrinkCategory.Cocktail,
        instructions:
            'Wash and brush an organic, untreated lemon, then cut a spiral of lemon peel, using a citrus peel. If it is too large, cut it with a sharp knife. Put some ice in a tall tumbler glass, place the lemon peel inside and pour the cognac, add the ginger beer and let 2-3 drops of Angostura fall into it. Easy to do, but once you try it you will love it.',
        ingredientGroups: [
            { amount: '40', ingredientId: '61', unit: Unit.ML },
            { amount: '100', ingredientId: '24', unit: Unit.ML },
            { amount: '', ingredientId: '27', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '88',
        imageSrc: 'images/vodka_tonic.jpg',
        isImagePortrait: false,
        translation: 'vodka-tonic',
        category: DrinkCategory.Cocktail,
        instructions:
            'Wash and cut 1 wedge and 1 slice of lime or lemon. Fill a tumbler with fresh ice. Pour the desired dose of vodka and top up with the tonic. Squeeze the lime wedge into the glass and decorate with the slice. That is all, very simple: it is just the recipe for happiness!',
        ingredientGroups: [
            { amount: '40', ingredientId: '8', unit: Unit.ML },
            { amount: '100', ingredientId: '7', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '89',
        imageSrc: 'images/bombay_cassis.jpg',
        isImagePortrait: false,
        translation: 'bombay-cassis',
        category: DrinkCategory.Cocktail,
        instructions:
            'Add the Gin, Crème de Cassis and lime juice to a balloon glass and swirl well to mix. Fill the glass with good quality cubed ice. Top up with chilled and freshly opened Fever-Tree Ginger Beer. Gently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice.',
        ingredientGroups: [
            { amount: '50', ingredientId: '6', unit: Unit.ML },
            { amount: '20', ingredientId: '68', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML },
            { amount: '75', ingredientId: '24', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '90',
        imageSrc: 'images/pegu_club.jpg',
        isImagePortrait: false,
        translation: 'pegu-club',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake, strain, up, cocktail glass',
        ingredientGroups: [
            { amount: '40', ingredientId: '6', unit: Unit.ML },
            { amount: '20', ingredientId: '85', unit: Unit.ML },
            { amount: '20', ingredientId: '2', unit: Unit.ML },
            { amount: '', ingredientId: '27', unit: '' },
            { amount: '', ingredientId: '58', unit: '' }
        ],
        tags: []
    },
    {
        id: '91',
        imageSrc: 'images/greyhound.jpg',
        isImagePortrait: false,
        translation: 'greyhound',
        category: DrinkCategory.Cocktail,
        instructions: 'Add the vodka to a Collins glass filled with ice. Top with grapefruit juice and stir.',
        ingredientGroups: [
            { amount: '40', ingredientId: '8', unit: Unit.ML },
            { amount: '90', ingredientId: '70', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '92',
        imageSrc: 'images/gimlet.jpg',
        isImagePortrait: false,
        translation: 'gimlet',
        category: DrinkCategory.Cocktail,
        instructions:
            'Add all the ingredients to a shaker and fill with ice. Shake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice. Garnish with a lime wheel.',
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '20', ingredientId: '2', unit: Unit.ML },
            { amount: '20', ingredientId: '3', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '93',
        imageSrc: 'images/a_furlong_too_late.jpg',
        isImagePortrait: false,
        translation: 'a-furlong-too-late',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.',
        ingredientGroups: [
            { amount: '60', ingredientId: '1', unit: Unit.ML },
            { amount: '120', ingredientId: '24', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '94',
        imageSrc: 'images/spritz_veneziano.jpg',
        isImagePortrait: false,
        translation: 'spritz-veneziano',
        category: DrinkCategory.Cocktail,
        instructions: 'Build into glass over ice, garnish and serve.',
        ingredientGroups: [
            { amount: '60', ingredientId: '86', unit: Unit.ML },
            { amount: '40', ingredientId: '80', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '95',
        imageSrc: 'images/amaretto_fizz.jpg',
        isImagePortrait: false,
        translation: 'amaretto-fizz',
        category: DrinkCategory.Cocktail,
        instructions:
            'Mix Amaretto, orange juice and sparkling wine in a jug. Add a strip orange zest to each glass, if you like.',
        ingredientGroups: [
            { amount: '40', ingredientId: '22', unit: Unit.ML },
            { amount: '60', ingredientId: '64', unit: Unit.ML },
            { amount: '150', ingredientId: '87', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '96',
        imageSrc: 'images/aperol_spritz.jpg',
        isImagePortrait: false,
        translation: 'aperol-spritz',
        category: DrinkCategory.Cocktail,
        instructions:
            'Put a couple of cubes of ice into 2 glasses and add Aperol. Divide the prosecco between the glasses and then top up with soda, if you like.',
        ingredientGroups: [
            { amount: '100', ingredientId: '80', unit: Unit.ML },
            { amount: '150', ingredientId: '86', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '97',
        imageSrc: 'images/the_philosopher.jpg',
        isImagePortrait: false,
        translation: 'the-philosopher',
        category: DrinkCategory.Cocktail,
        instructions:
            'Add all the spirits in a shaker (best to use Hendricks gin) as well as the orange bitters and lemon juice. Strain into a Margarita glass, top with Prosecco.',
        ingredientGroups: [
            { amount: '40', ingredientId: '6', unit: Unit.ML },
            { amount: '40', ingredientId: '78', unit: Unit.ML },
            { amount: '', ingredientId: '58', unit: '' },
            { amount: '20', ingredientId: '10', unit: Unit.ML },
            { amount: '', ingredientId: '86', unit: '' }
        ],
        tags: []
    },
    {
        id: '98',
        imageSrc: 'images/bounty_hunter.jpg',
        isImagePortrait: false,
        translation: 'bounty-hunter',
        category: DrinkCategory.Cocktail,
        instructions:
            'Add the spirits into a shaker as well as the pineapple juice, strain into a Margarita glass. Top with Prosecco and garnish with Blueberries.',
        ingredientGroups: [
            { amount: '40', ingredientId: '54', unit: Unit.ML },
            { amount: '40', ingredientId: '71', unit: Unit.ML },
            { amount: '', ingredientId: '26', unit: '' },
            { amount: '', ingredientId: '86', unit: '' }
        ],
        tags: []
    },
    {
        id: '99',
        imageSrc: 'images/blueberry_mojito.jpg',
        isImagePortrait: false,
        translation: 'blueberry-mojito',
        category: DrinkCategory.Cocktail,
        instructions:
            'Muddle the blueberries with the other ingredients and serve in a highball glass. Garnish with mint and a half slice of lime.',
        ingredientGroups: [
            { amount: '60', ingredientId: '54', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '', ingredientId: '42', unit: '' },
            { amount: '', ingredientId: '45', unit: '' },
            { amount: '', ingredientId: '88', unit: '' }
        ],
        tags: []
    },
    {
        id: '100',
        imageSrc: 'images/autumn_garibaldi.jpg',
        isImagePortrait: false,
        translation: 'autumn-garibaldi',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour all ingredients into a glass over ice and stir with a bar spoon. Garnish with some orange slices.',
        ingredientGroups: [
            { amount: '45', ingredientId: '36', unit: Unit.ML },
            { amount: '75', ingredientId: '64', unit: Unit.ML },
            { amount: '75', ingredientId: '24', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '101',
        imageSrc: 'images/simple_long_island_ice_tea.jpg',
        isImagePortrait: false,
        translation: 'simple-long-island-ice-tea',
        category: DrinkCategory.Cocktail,
        instructions:
            'Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.',
        ingredientGroups: [
            { amount: '15', ingredientId: '8', unit: Unit.ML },
            { amount: '15', ingredientId: '18', unit: Unit.ML },
            { amount: '15', ingredientId: '1', unit: Unit.ML },
            { amount: '15', ingredientId: '6', unit: Unit.ML },
            { amount: '', ingredientId: '63', unit: '' }
        ],
        tags: []
    },
    {
        id: '102',
        imageSrc: 'images/white_russian.jpg',
        isImagePortrait: false,
        translation: 'white-russian',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.',
        ingredientGroups: [
            { amount: '60', ingredientId: '8', unit: Unit.ML },
            { amount: '30', ingredientId: '43', unit: Unit.ML },
            { amount: '', ingredientId: '48', unit: '' }
        ],
        tags: []
    },
    {
        id: '103',
        imageSrc: 'images/mezcal_old_fashioned.jpg',
        isImagePortrait: true,
        translation: 'mezcal-old-fashioned',
        category: DrinkCategory.Cocktail,
        instructions: 'Put ingredients into old-fashioned glass filled with ice and stir.',
        ingredientGroups: [
            { amount: '45', ingredientId: '18', unit: Unit.ML },
            { amount: '15', ingredientId: '90', unit: Unit.ML },
            { amount: '7.5', ingredientId: '89', unit: Unit.ML },
            { amount: '', ingredientId: '27', unit: '' }
        ],
        tags: []
    },
    {
        id: '104',
        imageSrc: 'images/old_fashioned.jpg',
        isImagePortrait: false,
        translation: 'old-fashioned',
        category: DrinkCategory.Cocktail,
        instructions:
            'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange twist, and a cocktail cherry',
        ingredientGroups: [
            { amount: '45', ingredientId: '28', unit: Unit.ML },
            { amount: '', ingredientId: '27', unit: '' },
            { amount: '', ingredientId: '42', unit: '' },
            { amount: '', ingredientId: '91', unit: '' }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '105',
        imageSrc: 'images/sidecar.jpg',
        isImagePortrait: false,
        translation: 'sidecar',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.',
        ingredientGroups: [
            { amount: '60', ingredientId: '61', unit: Unit.ML },
            { amount: '15', ingredientId: '92', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '106',
        imageSrc: 'images/french75.jpg',
        isImagePortrait: false,
        translation: 'french-75',
        category: DrinkCategory.Cocktail,
        instructions:
            'Combine gin, sugar, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with Champagne. Stir gently.',
        ingredientGroups: [
            { amount: '45', ingredientId: '6', unit: Unit.ML },
            { amount: '2', ingredientId: '42', unit: Unit.TSP },
            { amount: '45', ingredientId: '10', unit: Unit.ML },
            { amount: '120', ingredientId: '60', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '107',
        imageSrc: 'images/mint_julep.jpg',
        isImagePortrait: false,
        translation: 'mint-julep',
        category: DrinkCategory.Cocktail,
        instructions:
            'In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.',
        ingredientGroups: [
            { amount: '4', ingredientId: '5', unit: '' },
            { amount: '75', ingredientId: '28', unit: Unit.ML },
            { amount: '1', ingredientId: '16', unit: Unit.TSP },
            { amount: '2', ingredientId: '91', unit: Unit.TSP }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '108',
        imageSrc: 'images/pisco_sour.jpg',
        isImagePortrait: false,
        translation: 'pisco-sour',
        category: DrinkCategory.Cocktail,
        instructions:
            'Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.',
        ingredientGroups: [
            { amount: '60', ingredientId: '93', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '1.5', ingredientId: '42', unit: Unit.TSP },
            { amount: '1', ingredientId: '23', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '109',
        imageSrc: 'images/aquafaba_gin_fizz.png',
        isImagePortrait: false,
        translation: 'aquafaba-gin-fizz',
        category: DrinkCategory.Cocktail,
        instructions:
            'Add the gin, lime juice, Aquafaba and sugar syrup to a cocktail shaker filled with ice. Shake until cold to touch. Strain the shaker into a rocks glass filled with ice and top with soda water. Garnish with a lime wedge.',
        ingredientGroups: [
            { amount: '15', ingredientId: '94', unit: Unit.ML },
            { amount: '25', ingredientId: '2', unit: Unit.ML },
            { amount: '50', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '3', unit: Unit.ML },
            { amount: '20', ingredientId: '4', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '110',
        imageSrc: 'images/bellini.jpg',
        isImagePortrait: false,
        translation: 'bellini',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour peach schnapps into chilled flute, add champange. Stir gently.',
        ingredientGroups: [
            { amount: '180', ingredientId: '60', unit: Unit.ML },
            { amount: '30', ingredientId: '69', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '111',
        imageSrc: 'images/mango_mojito.jpg',
        isImagePortrait: false,
        translation: 'mango-mojito',
        category: DrinkCategory.Cocktail,
        instructions:
            'Blend lime juice with the mango to give a smooth purée. Put 2 pieces of lime in a highball glass and add 1 teaspoon of caster sugar and 5-6 mint leaves. Squish everything together with a muddler or the end of a rolling pin to release all the flavours from the lime and mint. Add the mango purée, 30ml white rum and a handful of crushed ice, stirring well to mix everything together. Top up with soda water to serve and garnish with extra mint, if you like.',
        ingredientGroups: [
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '1', ingredientId: '95', unit: '' },
            { amount: '', ingredientId: '5', unit: '' },
            { amount: '30', ingredientId: '1', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: []
    },
    {
        id: '112',
        imageSrc: 'images/pornstar_martini.jpg',
        isImagePortrait: false,
        translation: 'pornstar-martini',
        category: DrinkCategory.Cocktail,
        instructions:
            'Straight: Pour all ingredients into mixing glass with ice cubes. Shake well. Strain in chilled martini cocktail glass. Cut passion fruit in half and use as garnish.',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '30', ingredientId: '96', unit: Unit.ML },
            { amount: '20', ingredientId: '2', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '113',
        imageSrc: 'images/pink_moon.jpg',
        isImagePortrait: false,
        translation: 'pink-moon',
        category: DrinkCategory.Cocktail,
        instructions:
            'Slowly shake in a shaker with ice, strain into a square whiskey glass. Top with fresh ice. Add the blackberries to garnish. Add flowers and a green leaf for a special look!',
        ingredientGroups: [
            { amount: '30', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '71', unit: Unit.ML },
            { amount: '25', ingredientId: '83', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '114',
        imageSrc: 'images/simple_syrup.jpg',
        isImagePortrait: false,
        translation: 'simple-syrup',
        category: DrinkCategory.Ingredient,
        instructions: 'Dissolve the sugar in boiling water. \nLet cool. \nStore in the fridge. Lasts about a month.',
        ingredientGroups: [
            { amount: '2.5', ingredientId: '91', unit: Unit.DL },
            { amount: '2.5', ingredientId: '42', unit: Unit.DL }
        ],
        tags: []
    },
    {
        id: '115',
        imageSrc: 'images/sweet_and_sour.jpg',
        isImagePortrait: false,
        translation: 'sweet-and-sour',
        category: DrinkCategory.Ingredient,
        instructions:
            'Mix simple syrup with lemon and lime juice. \nPour into a bottle and store in the fridge. Lasts about a month.',
        ingredientGroups: [
            { amount: '2.5', ingredientId: '3', unit: Unit.DL },
            { amount: '1.25', ingredientId: '2', unit: Unit.DL },
            { amount: '1.25', ingredientId: '10', unit: Unit.DL }
        ],
        tags: []
    },
    {
        id: '116',
        imageSrc: 'images/afterglow.jpg',
        isImagePortrait: false,
        translation: 'afterglow',
        category: DrinkCategory.Mocktail,
        instructions: 'Mix \nServe over ice',
        ingredientGroups: [
            { amount: '20', ingredientId: '30', unit: Unit.ML },
            { amount: '80', ingredientId: '64', unit: Unit.ML },
            { amount: '80', ingredientId: '26', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '117',
        imageSrc: 'images/alice_cocktail.jpg',
        isImagePortrait: false,
        translation: 'alice-cocktail',
        category: DrinkCategory.Mocktail,
        instructions: 'Shake well, strain into a large cocktail glass.',
        ingredientGroups: [
            { amount: '10', ingredientId: '30', unit: Unit.ML },
            { amount: '10', ingredientId: '64', unit: Unit.ML },
            { amount: '20', ingredientId: '26', unit: Unit.ML },
            { amount: '40', ingredientId: '35', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '118',
        imageSrc: 'images/apple_karate.jpg',
        isImagePortrait: false,
        translation: 'apple-karate',
        category: DrinkCategory.Mocktail,
        instructions:
            'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
        ingredientGroups: [
            { amount: '5', ingredientId: '97', unit: Unit.DL },
            { amount: '1', ingredientId: '98', unit: '' }
        ],
        tags: []
    },
    {
        id: '119',
        imageSrc: 'images/orangeade.jpg',
        isImagePortrait: false,
        translation: 'orangeade',
        category: DrinkCategory.Mocktail,
        instructions:
            'Place some ice cubes in a large tumbler or highball glass, add lemon juice, orange juice, sugar syrup, and stir well. \nTop up with cold soda water, serve with a drinking straw.',
        ingredientGroups: [
            { amount: '50', ingredientId: '10', unit: Unit.ML },
            { amount: '150', ingredientId: '64', unit: Unit.ML },
            { amount: '30', ingredientId: '3', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' }
        ],
        tags: []
    },
    {
        id: '120',
        imageSrc: 'images/banana_milk_shake.jpg',
        isImagePortrait: false,
        translation: 'banana-milk-shake',
        category: DrinkCategory.Mocktail,
        instructions:
            'Blend very well, preferably in a household mixer. \nServe in a wine glass, garnish with whipped cream and a piece of banana.',
        ingredientGroups: [
            { amount: '100', ingredientId: '77', unit: Unit.ML },
            { amount: '40', ingredientId: '64', unit: Unit.ML },
            { amount: '10', ingredientId: '3', unit: Unit.ML },
            { amount: '0.5', ingredientId: '99', unit: '' }
        ],
        tags: []
    },
    {
        id: '121',
        imageSrc: 'images/absolut_limousine.jpg',
        isImagePortrait: false,
        translation: 'absolut-limousine',
        category: DrinkCategory.Cocktail,
        instructions: 'Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.',
        ingredientGroups: [
            { amount: '30', ingredientId: '51', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML },
            { amount: '', ingredientId: '7', unit: '' }
        ],
        tags: []
    },
    {
        id: '122',
        imageSrc: 'images/zizi_coin-coin.jpg',
        isImagePortrait: false,
        translation: 'zizi-coin-coin',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour Cointreau on ice, add fresh lemon (or lime) juice, stir gently, and finally add slices of lemon/lime in glass',
        ingredientGroups: [
            { amount: '50', ingredientId: '92', unit: Unit.ML },
            { amount: '20', ingredientId: '10', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '123',
        imageSrc: 'images/cream_soda.jpg',
        isImagePortrait: false,
        translation: 'cream-soda',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.',
        ingredientGroups: [
            { amount: '40', ingredientId: '21', unit: Unit.ML },
            { amount: '', ingredientId: '24', unit: '' }
        ],
        tags: []
    },
    {
        id: '124',
        imageSrc: 'images/caipirinha.jpg',
        isImagePortrait: false,
        translation: 'caipirinha',
        category: DrinkCategory.Cocktail,
        instructions:
            'Place lime juice and sugar into old fashioned glass. Fill the glass with ice and add the Cachaça.',
        ingredientGroups: [
            { amount: '2', ingredientId: '42', unit: Unit.TSP },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '75', ingredientId: '100', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '125',
        imageSrc: 'images/elderflower_caipirinha.jpg',
        isImagePortrait: false,
        translation: 'elderflower-caipirinha',
        category: DrinkCategory.Cocktail,
        instructions:
            'Fill the glass with crushed ice and add Cachaça, lime juice and elderflower cordial. Stir well and top with some more crushed ice. Garnish with lime and enjoy!',
        ingredientGroups: [
            { amount: '60', ingredientId: '100', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '30', ingredientId: '83', unit: Unit.ML }
        ],
        tags: []
    },
    {
        id: '126',
        imageSrc: 'images/california_root_beer.jpg',
        isImagePortrait: false,
        translation: 'california-root-beer',
        category: DrinkCategory.Cocktail,
        instructions: 'Put Kahlua and Galliano in highball glass fill with Coke',
        ingredientGroups: [
            { amount: '30', ingredientId: '55', unit: Unit.ML },
            { amount: '30', ingredientId: '33', unit: Unit.ML },
            { amount: '', ingredientId: '63', unit: '' }
        ],
        tags: []
    },
    {
        id: '127',
        imageSrc: 'images/sangria.jpg',
        isImagePortrait: false,
        translation: 'sangria',
        category: DrinkCategory.Other,
        instructions:
            'Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.',
        ingredientGroups: [
            { amount: '7.5', ingredientId: '101', unit: Unit.DL },
            { amount: '1.25', ingredientId: '42', unit: Unit.DL },
            { amount: '2.5', ingredientId: '64', unit: Unit.DL },
            { amount: '2.5', ingredientId: '10', unit: Unit.DL },
            { amount: '', ingredientId: '102', unit: '' },
            { amount: '', ingredientId: '103', unit: '' }
        ],
        tags: []
    },
    {
        id: '128',
        imageSrc: 'images/white_wine_sangria.jpg',
        isImagePortrait: false,
        translation: 'white-sangria',
        category: DrinkCategory.Other,
        instructions:
            'Chop the Lemon, Lime and other fruits into large chunks.\nFill the Pitcher with the white wine and mix in the Apple Brandy.\nTop to taste with soda water.',
        ingredientGroups: [
            { amount: '7.5', ingredientId: '87', unit: Unit.DL },
            { amount: '120', ingredientId: '65', unit: Unit.ML },
            { amount: '', ingredientId: '4', unit: '' },
            { amount: '150', ingredientId: '20', unit: Unit.G },
            { amount: '1', ingredientId: '104', unit: '' },
            { amount: '1', ingredientId: '105', unit: '' },
            { amount: '1', ingredientId: '106', unit: '' }
        ],
        tags: []
    },
    {
        id: '129',
        imageSrc: 'images/french_martini.jpg',
        isImagePortrait: false,
        translation: 'french-martini',
        category: DrinkCategory.Cocktail,
        instructions:
            'Pour all ingredients into shaker with ice cubes.\nShake well and strain into a chilled cocktail glass.\nSqueeze oil from lemon peel onto the drink',
        ingredientGroups: [
            { amount: '45', ingredientId: '8', unit: Unit.ML },
            { amount: '15', ingredientId: '107', unit: Unit.ML },
            { amount: '15', ingredientId: '26', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '130',
        imageSrc: 'images/russian_spring_punch.jpg',
        isImagePortrait: false,
        translation: 'russian-spring-punch',
        category: DrinkCategory.Cocktail,
        instructions: 'Pour the ingredients into an highball glass with ice',
        ingredientGroups: [
            { amount: '30', ingredientId: '8', unit: Unit.ML },
            { amount: '15', ingredientId: '68', unit: Unit.ML },
            { amount: '10', ingredientId: '3', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '131',
        imageSrc: 'images/b_52.jpg',
        isImagePortrait: false,
        translation: 'b-52',
        category: DrinkCategory.Shot,
        instructions:
            'Layer ingredients into a shot glass. Start with coffee liqueur, continue with Baileys and lastly the Grand Marnier',
        ingredientGroups: [
            { amount: '15', ingredientId: '55', unit: Unit.ML },
            { amount: '15', ingredientId: '108', unit: Unit.ML },
            { amount: '15', ingredientId: '109', unit: Unit.ML }
        ],
        tags: [Tag.FormerIBA]
    },
    {
        id: '132',
        imageSrc: 'images/barracuda.png',
        isImagePortrait: true,
        translation: 'barracuda',
        category: DrinkCategory.Cocktail,
        instructions: 'Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.',
        ingredientGroups: [
            { amount: '45', ingredientId: '110', unit: Unit.ML },
            { amount: '15', ingredientId: '33', unit: Unit.ML },
            { amount: '60', ingredientId: '26', unit: Unit.ML },
            { amount: '1', ingredientId: '2', unit: Unit.DASH },
            { amount: '', ingredientId: '86', unit: '' }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '133',
        imageSrc: 'images/bramble.jpg',
        isImagePortrait: false,
        translation: 'bramble',
        category: DrinkCategory.Cocktail,
        instructions: `Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice.`,
        ingredientGroups: [
            { amount: '50', ingredientId: '6', unit: Unit.ML },
            { amount: '25', ingredientId: '10', unit: Unit.ML },
            { amount: '15', ingredientId: '3', unit: Unit.ML },
            { amount: '15', ingredientId: '111', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '134',
        imageSrc: 'images/vampiro.jpg',
        isImagePortrait: false,
        translation: 'vampiro',
        category: DrinkCategory.Cocktail,
        instructions: `Vampiros may be made in a tall glass or an old fashioned glass.\nBartenders may first "rim" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim.\nThe second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila.\nThe next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo).\nThe final step is to stir the ingredients so that the flavours are properly blended.`,
        ingredientGroups: [
            { amount: '60', ingredientId: '18', unit: Unit.ML },
            { amount: '30', ingredientId: '9', unit: Unit.ML },
            { amount: '30', ingredientId: '64', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML },
            { amount: '1', ingredientId: '3', unit: Unit.DASH },
            { amount: '', ingredientId: '46', unit: '' }
        ],
        tags: [Tag.FormerIBA]
    },
    {
        id: '135',
        imageSrc: 'images/yellow_bird.jpg',
        isImagePortrait: false,
        translation: 'yellow-bird',
        category: DrinkCategory.Cocktail,
        instructions: `Shake and strain into a chilled cocktail glass`,
        ingredientGroups: [
            { amount: '30', ingredientId: '1', unit: Unit.ML },
            { amount: '15', ingredientId: '33', unit: Unit.ML },
            { amount: '15', ingredientId: '38', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '136',
        imageSrc: 'images/tommys_margarita.jpg',
        isImagePortrait: false,
        translation: `tommys-margarita`,
        category: DrinkCategory.Cocktail,
        instructions: `Shake and strain into a chilled cocktail glass`,
        ingredientGroups: [
            { amount: '60', ingredientId: '18', unit: Unit.ML },
            { amount: '30', ingredientId: '2', unit: Unit.ML },
            { amount: '30', ingredientId: '89', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '137',
        imageSrc: 'images/hemingway_special.jpg',
        isImagePortrait: false,
        translation: `hemingway-special`,
        category: DrinkCategory.Cocktail,
        instructions: `Pour all ingredients into a shaker with ice. Shake.`,
        ingredientGroups: [
            { amount: '60', ingredientId: '1', unit: Unit.ML },
            { amount: '45', ingredientId: '70', unit: Unit.ML },
            { amount: '15', ingredientId: '57', unit: Unit.ML },
            { amount: '15', ingredientId: '2', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '138',
        imageSrc: 'images/gin_fizz.jpg',
        isImagePortrait: false,
        translation: `gin-fizz`,
        category: DrinkCategory.Cocktail,
        instructions: `Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.`,
        ingredientGroups: [
            { amount: '45', ingredientId: '6', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '15', ingredientId: '3', unit: Unit.ML },
            { amount: '1', ingredientId: '4', unit: Unit.SPLASH }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '139',
        imageSrc: 'images/last_word.jpg',
        isImagePortrait: false,
        translation: `last-word`,
        category: DrinkCategory.Cocktail,
        instructions: `Shake with ice and strain into a cocktail glass.`,
        ingredientGroups: [
            { amount: '25', ingredientId: '6', unit: Unit.ML },
            { amount: '25', ingredientId: '57', unit: Unit.ML },
            { amount: '25', ingredientId: '112', unit: Unit.ML },
            { amount: '25', ingredientId: '2', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '140',
        imageSrc: 'images/new_york_sour.jpg',
        isImagePortrait: false,
        translation: `new-york-sour`,
        category: DrinkCategory.Cocktail,
        instructions: `Shake blended whiskey, juice of lemon, and simple syrup with ice and strain into a whiskey glass. Float claret on top. Decorate with the half-slice of lemon and the cherry and serve.`,
        ingredientGroups: [
            { amount: '60', ingredientId: '28', unit: Unit.ML },
            { amount: '25', ingredientId: '3', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '15', ingredientId: '101', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '141',
        imageSrc: 'images/paradise.jpg',
        isImagePortrait: false,
        translation: `paradise`,
        category: DrinkCategory.Cocktail,
        instructions: `Shake together over ice. Strain into cocktail glass and serve chilled.`,
        ingredientGroups: [
            { amount: '30', ingredientId: '6', unit: Unit.ML },
            { amount: '25', ingredientId: '29', unit: Unit.ML },
            { amount: '15', ingredientId: '64', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '142',
        imageSrc: 'images/porto_flip.jpg',
        isImagePortrait: false,
        translation: `porto-flip`,
        category: DrinkCategory.Cocktail,
        instructions: `Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve.`,
        ingredientGroups: [
            { amount: '15', ingredientId: '50', unit: Unit.ML },
            { amount: '45', ingredientId: '113', unit: Unit.ML },
            { amount: '1', ingredientId: '59', unit: Unit.None }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '143',
        imageSrc: 'images/sea_breeze.jpg',
        isImagePortrait: false,
        translation: `sea-breeze`,
        category: DrinkCategory.Cocktail,
        instructions: `Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.`,
        ingredientGroups: [
            { amount: '45', ingredientId: '8', unit: Unit.ML },
            { amount: '120', ingredientId: '17', unit: Unit.ML },
            { amount: '30', ingredientId: '70', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    },
    {
        id: '144',
        imageSrc: 'images/tipperary.jpg',
        isImagePortrait: false,
        translation: `tipperary`,
        category: DrinkCategory.Cocktail,
        instructions: `Stir over ice. Strain into chilled glass. Cut a wide swath of orange peel, and express the orange oils over the drink. Discard orange twist.`,
        ingredientGroups: [
            { amount: '60', ingredientId: '41', unit: Unit.ML },
            { amount: '30', ingredientId: '37', unit: Unit.ML },
            { amount: '15', ingredientId: '112', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '145',
        imageSrc: 'images/bees_knees.jpg',
        isImagePortrait: false,
        translation: `bees-knees`,
        category: DrinkCategory.Cocktail,
        instructions: `Stir honey with lemon and orange juices until it dissolves, add gin and shake with ice. Strain into a chilled cocktail glass.`,
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '2', ingredientId: '115', unit: Unit.TSP },
            { amount: '25', ingredientId: '10', unit: Unit.ML },
            { amount: '25', ingredientId: '64', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '146',
        imageSrc: 'images/boulevardier.jpg',
        isImagePortrait: false,
        translation: `boulevardier`,
        category: DrinkCategory.Cocktail,
        instructions: `Stir with ice, strain, garnish and serve.`,
        ingredientGroups: [
            { amount: '30', ingredientId: '36', unit: Unit.ML },
            { amount: '30', ingredientId: '37', unit: Unit.ML },
            { amount: '45', ingredientId: '28', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '147',
        imageSrc: 'images/casino.jpg',
        isImagePortrait: false,
        translation: `casino`,
        category: DrinkCategory.Cocktail,
        instructions: `Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw.`,
        ingredientGroups: [
            { amount: '60', ingredientId: '6', unit: Unit.ML },
            { amount: '15', ingredientId: '57', unit: Unit.ML },
            { amount: '15', ingredientId: '10', unit: Unit.ML },
            { amount: '2', ingredientId: '58', unit: Unit.DASH }
        ],
        tags: [Tag.IBA, Tag.TheUnforgettables]
    },
    {
        id: '148',
        imageSrc: 'images/paper_plane.jpg',
        isImagePortrait: false,
        translation: 'paper-plane',
        category: DrinkCategory.Cocktail,
        instructions: `Pour all ingredients into a cocktail shaker, shake with ice, strain into cocktail glass.`,
        ingredientGroups: [
            { amount: '30', ingredientId: '28', unit: Unit.ML },
            { amount: '30', ingredientId: '116', unit: Unit.ML },
            { amount: '30', ingredientId: '80', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML }
        ],
        tags: [Tag.IBA, Tag.NewEraDrinks]
    },
    {
        id: '149',
        imageSrc: 'images/long_island_ice_tea.jpg',
        isImagePortrait: false,
        translation: 'long-island-ice-tea',
        category: DrinkCategory.Cocktail,
        instructions: 'Add all ingredients into a highball glass filled with ice.\nStir gently.',
        ingredientGroups: [
            { amount: '15', ingredientId: '8', unit: Unit.ML },
            { amount: '15', ingredientId: '18', unit: Unit.ML },
            { amount: '15', ingredientId: '1', unit: Unit.ML },
            { amount: '15', ingredientId: '6', unit: Unit.ML },
            { amount: '15', ingredientId: '92', unit: Unit.ML },
            { amount: '30', ingredientId: '10', unit: Unit.ML },
            { amount: '20', ingredientId: '3', unit: Unit.ML },
            { amount: '', ingredientId: '63', unit: '' }
        ],
        tags: [Tag.IBA, Tag.ContemporaryClassics]
    }
];
