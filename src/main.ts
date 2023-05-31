import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AssetDialogComponent } from './app/management-page/asset-management/asset-dialog/asset-dialog.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  entryComponents: [AssetDialogComponent]

