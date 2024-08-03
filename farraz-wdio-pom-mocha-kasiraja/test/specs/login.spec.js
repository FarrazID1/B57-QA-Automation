//TODO: 'describe' the test suite/scenario - LOGIN
describe('Test Suite => Login to saucedemo', () => {
  //-- Test Case 1: login with valid credentials - POSITIVE SCENARIO
  it('TC01-POSITIVE => should login successfully with valid credentials', async () => {
    //Todo: -- open URL --
    await browser.url('/');

    // Todo: -- input valid username and password - use 'css selector'
    await $('#email').setValue('admin.farraz@gmail.com');
    await $('#password').setValue('farraz123');

    // Todo: -- click login button - use 'element locator' (full Xpath)
    await $(
      '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]'
    ).click();

    //Todo: Add assertion - using 'expect'
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard');

    // Then, Logout;
    await $('#menu-button-14').click();
    await $('#menu-list-14-menuitem-12').click();

    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login');
  });

  //-- Test Case 2: login with invalid credentials - NEGATIVE SCENARIO
  it('TC02-NEGATIVE => should show error for invalid EMAIL format', async () => {
    await browser.url('/');

    // Todo: -- input invalid EMAIL and valid password
    await $('#email').setValue('admin.911');
    await $('#password').setValue('farraz123');

    // Todo: -- click login button
    await $(
      '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]'
    ).click();

    //Todo 6: Add assertion: to verify error message
    const errorMessage = await $('//*[@role="alert"]');
    await expect(errorMessage).toHaveTextContaining(
      `"email" must be a valid email`
    );
  });

  //-- Test Case 3: login with invalid credentials - NEGATIVE SCENARIO
  it('TC03-NEGATIVE => should show error for invalid credentials (PASSWORD)', async () => {
    await browser.url('/');

    // Todo: -- input valid EMAIL and invalid password
    await $('#email').setValue('admin.farraz@gmail.com');
    await $('#password').setValue('farraz');

    // Todo: -- click login button
    await $(
      '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]'
    ).click();

    //Todo 6: Add assertion: to verify error message
    const errorMessage = await $('//*[@role="alert"]');
    await expect(errorMessage).toHaveTextContaining(
      'Kredensial yang Anda berikan salah'
    );
  });
});
