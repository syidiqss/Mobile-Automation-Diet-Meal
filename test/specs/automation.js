// Scenario : From open App to Home Screen App Diet Meal

describe('Open Diet Meal Application', function() {
    it('should open Diet Meal app', async () => {
        const welcome = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[1]');
        
        // assert test Welcome... di halaman welcome page
        await expect(welcome).toHaveAttrContaining('text', 'Welcome...');
    })

    it('input data in welcome page', async () => {
        await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]').setValue('syidiq');

        
        // input weight
        await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]').setValue('63');

        // input height
        await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]').setValue('166');

        
        // choose male
        await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]').click();


        const buttonNext = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button');
        await driver.hideKeyboard()
        await buttonNext.click();



    })

    it('should open choose daily activities page', async () => {
        const dailyActivities = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]');
        
        // assert test Aktivitas sehari-hari di halaman choose daily activities page
        await expect(dailyActivities).toHaveAttrContaining('text', 'Aktivitas sehari-hari');
    })

    it('choose daily activities', async () => {
        // choose sekolah, kuliah, kerja kantor, dsj.
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RadioGroup/android.widget.RadioButton[4]').click();
        
        // click button selesai
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button').click();
        
    })

    it('should open home page', async () => {
        const home = await $('//android.widget.FrameLayout[@content-desc="Home"]/android.widget.ImageView');
        
        // assert selected true di halaman home page
        await expect(home).toHaveAttrContaining('selected', true);
    })
})