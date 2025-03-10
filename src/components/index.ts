import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./widgets/explore-section/explore-section'),
        PLATFORM.moduleName('./widgets/ingredients-widget/ingredients-widget'),
        PLATFORM.moduleName('./widgets/add-ingredients/add-ingredients'),
        PLATFORM.moduleName('./widgets/navigation-widget/navigation-widget'),
        PLATFORM.moduleName('./navbar/navbar'),
        PLATFORM.moduleName('./cocktail-list-item.html'),
        PLATFORM.moduleName('./../converters/amount-format'),
        PLATFORM.moduleName('./icons/icon-filter.html'),
        PLATFORM.moduleName('./icons/icon-add.html'),
        PLATFORM.moduleName('./icons/icon-heart.html'),
        PLATFORM.moduleName('./icons/icon-mail.html'),
        PLATFORM.moduleName('./icons/icon-settings.html'),
        PLATFORM.moduleName('./icons/icon-chevron-back.html'),
        PLATFORM.moduleName('./icons/icon-person.html'),
        PLATFORM.moduleName('./icons/icon-leaf.html'),
        PLATFORM.moduleName('./icons/icon-wine.html'),
        PLATFORM.moduleName('./icons/icon-bookmark.html'),
        PLATFORM.moduleName('./icons/icon-trash.html'),
        PLATFORM.moduleName('./tag-component.html')
    ]);
}
