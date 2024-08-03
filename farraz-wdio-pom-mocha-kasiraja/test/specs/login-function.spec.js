//! -- define a Function to perform 'login' => REUSABLE FUNCTION
const login = async (email, password) => {
  //Todo: open URL
  await browser.url('/');

  //Todo: Input username and password -> click login button
  await $('#email').setValue(email);
  await $('#password').setValue(password);

  //Todo: click login button -> use CSS selector
  await $(
    '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]'
  ).click();
};

//! -- define a Function to perform 'Logout'
const logout = async () => {
  //TODO: click logout button -> use CSS selector
  await $('#menu-button-14').click();
  await $('#menu-list-14-menuitem-12').click();
};

//! -- define Test Suite for Login to saucedemo - POSITIVE & NEGATIVE
describe('Test Suite => Test for Login-Logout (with reusable function)', () => {
  it('TC01-POSITIVE => should login successfully with valid credentials', async () => {
    // --call 'login' function -> Input valid USERNAME and PASSWORD
    await login('admin.farraz@gmail.com', 'farraz123');

    //Todo: Add assertion - using 'expect'
    //? -- to verify successful login or not - based on opened page (URL)
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard');
  });

  it('TC02-POSITIVE => should logout successfully', async () => {
    // --call 'logout' function
    await logout();

    // Todo: Add assertion: to verify successful logout or not
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login');
  });

  it('TC03-NEGATIVE => should login failed for invalid EMAIL format', async () => {
    // --call 'login' function -> Input invalid EMAIL and valid password
    await login('invalid_email', 'farraz123');

    // Todo: Add assertion -- use relative Xpath --
    //? *web element: <div role="alert" class="...">
    const errorMessage = await $('//*[@role="alert"]');

    // Assertion on the error message
    await expect(errorMessage).toHaveTextContaining(
      `"email" must be a valid email`
    );
  });

  it('TC04-NEGATIVE => should login failed for invalid credentials (PASSWORD)', async () => {
    // --call 'login' function -> Input valid email and invalid PASSWORD
    await login('admin.farraz@gmail.com', 'invalid_password');

    const errorMessage = await $('//*[@role="alert"]');

    // Assertion on the error message
    await expect(errorMessage).toHaveTextContaining(
      'Kredensial yang Anda berikan salah'
    );
  });
});
