import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const refGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const previousUrl = router.url.replace('/', '');
  const destinationUrl = route.url[0].path;

  if (previousUrl !== destinationUrl) {
    router.navigate([destinationUrl]);
    return false;
  }

  return true;
};
