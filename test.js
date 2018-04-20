Test.describe('hurryUpOnMeeting function', () => {
  Test.it('should return Hurrah! result in case of NO side streets in case that you are on time', () => {
    Test.assertEquals(hurryUpOnMeeting("abcXdef", [], 40, 80, 34), "Hurrah!");
    Test.assertEquals(hurryUpOnMeeting("Xabcdef", [], 40, 80, 30), "Hurrah!");
  });

  Test.it('should return Hurrah! result in case of NO side streets in case that you are late', () => {
    Test.assertEquals(hurryUpOnMeeting("abcdefX", [], 40, 80, 34), "I am running about 2 minutes late!");
    Test.assertEquals(hurryUpOnMeeting("abcdefX", [], 40, 80, 33), "I am running about 3 minutes late!");
  });

  Test.it('should return Hurrah! result in case of side streets in case that you are on time', () => {
    Test.assertEquals(hurryUpOnMeeting("abcdeXghi", ["","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 40), "Hurrah!");
    Test.assertEquals(hurryUpOnMeeting("abcdeXghi", ["A","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 41), "Hurrah!");
    Test.assertEquals(hurryUpOnMeeting("abcdeXghi", ["AAA","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 43), "Hurrah!");
  });

  Test.it('should return Hurrah! result in case of side streets in case that you are late', () => {
    Test.assertEquals(hurryUpOnMeeting("abcdeXghi", ["A","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 40), "I am running about 1 minutes late!");
    Test.assertEquals(hurryUpOnMeeting("abcdeXghi", ["AAA","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 31), "I am running about 12 minutes late!");
  });
});
