describe('Open Application', () => {
  it('should open apps', async () => {
    await $('//*[@text="Welcome..."]').click();
  });
});
describe('Submit User Form Data', () => {
  it('input field name: widyariyani', async () => {
    await $('//*[@text="Name"]').setValue('farraz sarmento');
  });
  it('input field weight: 50', async () => {
    await $('//*[@text="Weight"]').setValue(61);
  });
  it('input field height: 160', async () => {
    await $('//*[@text="Height"]').setValue(170);
  });
  it('click choose field gender: Female', async () => {
    await $('//*[@text="Male"]').click();
  });
  it('click button NEXT', async () => {
    await $('//*[@text="NEXT"]').click();
  });
});
describe('Submit User Form Data Page 2', () => {
  it('click choose field aktivitas sehari-hari', async () => {
    await $('//*[@text="Menulis, Mengetik, dsj."]').click();
  });
  it('click button SELESAI', async () => {
    await $('//*[@text="SELESAI"]').click();
  });
  it('validate home screen diet meal app', async () => {
    await expect($('//*[@text="Ready to some calories today?"]')).toHaveText(
      'Ready to some calories today?'
    );
  });
});
