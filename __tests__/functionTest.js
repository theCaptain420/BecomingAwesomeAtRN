import getNewsSiteUrlToShow from '../src/frontpage/NewsComponents/getNewsSiteUrlToShow'
test('Tjekker om den returnere det rigtige url type', ()=>{
    let fakeUrl = "https://twitter.com/ManjaroLinux/status/1235452326028046336"
    let correctResult = "twitter.com"
    expect(getNewsSiteUrlToShow(fakeUrl)).toStrictEqual(correctResult)
})
