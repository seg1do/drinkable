import { DrinkCategory } from 'domain/enums/drink-category';
import { Unit } from 'domain/enums/unit';
import { Ingredient } from './ingredient';
export class StaticCocktail {
    id: string;
    translation: string;
    imageSrc: string;
    isImagePortrait: boolean;
    category: DrinkCategory;
    ingredientGroups: IngredientGroup[];
    instructions: string;
    tags: string[];
}

export class Cocktail extends StaticCocktail {
    constructor() {
        super();
        this.ingredientGroups = [];
        this.tags = [];
    }
    name: string;
    rating?: number;
    isFavorite?: boolean;
}

export class IngredientGroup {
    ingredientId: string;
    amount: string;
    unit: Unit | string;
}

export class ExtendedIngredientGroup extends IngredientGroup {
    ingredient: Ingredient;
    isInStorage: boolean;
    substituteNames: string;
    isChecked: boolean;
}

export class CocktailWithMissingIngredient extends Cocktail {
    missingIngredient: Ingredient;
}
