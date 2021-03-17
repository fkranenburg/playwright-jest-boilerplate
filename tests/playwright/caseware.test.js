describe("naam van test", () => {
    it("omschrijving van test", async () => {
        // Go to https://www.caseware.com/
        await page.goto("https://www.caseware.com/");
        // Click #toggle-search-bar
        await page.click("#toggle-search-bar");
        // Fill [placeholder="Search CaseWare International Inc."]
        await page.fill(
            '[placeholder="Search CaseWare International Inc."]',
            "apps"
        );

        // Press Enter
        await page.press(
            '[placeholder="Search CaseWare International Inc."]',
            "Enter"
        );
        // assert.equal(page.url(), 'https://www.caseware.com/search?q=apps&lang=');
        // Click text=Working Papers Resources
        await page.click("text=Working Papers Resources");
        // assert.equal(page.url(), 'https://www.caseware.com/support/working-papers');
        // Click text=×
        await page.click("text=×");
        // Click text=Enhancements
        await page.click("text=Enhancements");
        // Select 2
        await page.selectOption(
            "text=Supporting Working Papers home / support / working papers Resources Downloads En >> select",
            "2"
        );


        //await page.pause();

        // example jest test
        await expect(page).toHaveText("Working Papers 2020");

    });
});
