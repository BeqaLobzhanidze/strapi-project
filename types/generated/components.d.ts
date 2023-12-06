import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonLanguageSwitcherItem extends Schema.Component {
  collectionName: 'components_common_language_switcher_items';
  info: {
    displayName: 'language-switcher-item';
    icon: 'plus';
    description: '';
  };
  attributes: {
    code: Attribute.String;
    flag: Attribute.Media;
    locale: Attribute.String;
  };
}

export interface CommonLanguageSwitcher extends Schema.Component {
  collectionName: 'components_common_language_switchers';
  info: {
    displayName: 'language-switcher';
    icon: 'earth';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'common.language-switcher-item', true>;
  };
}

export interface CommonMainMenuItem extends Schema.Component {
  collectionName: 'components_common_main_menu_items';
  info: {
    displayName: 'main-menu-item';
  };
  attributes: {
    title: Attribute.String;
    pageId: Attribute.String;
  };
}

export interface CommonMainMenu extends Schema.Component {
  collectionName: 'components_common_main_menus';
  info: {
    displayName: 'main-menu';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'common.main-menu-item', true>;
    title: Attribute.String;
    pageId: Attribute.String;
  };
}

export interface CommonSocialMediaItem extends Schema.Component {
  collectionName: 'components_common_social_media_items';
  info: {
    displayName: 'social-media-item';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface CommonSocialMedia extends Schema.Component {
  collectionName: 'components_common_social_medias';
  info: {
    displayName: 'social-media';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'common.social-media-item', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.language-switcher-item': CommonLanguageSwitcherItem;
      'common.language-switcher': CommonLanguageSwitcher;
      'common.main-menu-item': CommonMainMenuItem;
      'common.main-menu': CommonMainMenu;
      'common.social-media-item': CommonSocialMediaItem;
      'common.social-media': CommonSocialMedia;
    }
  }
}
