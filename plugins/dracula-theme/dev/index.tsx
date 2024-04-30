import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { themeDraculaPlugin, ThemeDraculaPage } from '../src/plugin';

createDevApp()
  .registerPlugin(themeDraculaPlugin)
  .addPage({
    element: <ThemeDraculaPage />,
    title: 'Root Page',
    path: '/theme-dracula',
  })
  .render();
