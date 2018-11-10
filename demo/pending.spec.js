describe('Some suite', function () {
    it('Pending Test', function () {
        pending('This is pending')
    });

    it('Working test', function () {
        expect(true).toBe(true);
    });

    xit('Skipped test', function () {
        expect(true).toBe(true);
    });
});