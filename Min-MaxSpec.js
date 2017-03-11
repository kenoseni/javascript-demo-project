  var min_max = require("../../app/min_max")

 describe('Min-Max Numbers in a List: ', function () {

   describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

     it('should return [1,4] for [1, 2, 3 , 4]', function () {
       expect(min_max.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
     });

     it('should return [4, 6] for [6, 4]', function () {
       expect(min_max.findMinMax([6, 4])).toEqual([4, 6]);
     });

     it('should return [11, 13] for [13, 11]', function () {
       expect(min_max.findMinMax([13, 11])).toEqual([11, 13]);
     });

     it('should return [1,7] for [1, 7, 3 , 4]', function () {
       expect(min_max.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
     });


     it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
       expect(min_max.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
     });

     it('should return [0, 99] for [4, 66, 6, 44, 7, 99, 8, 68, 0]', function () {
       expect(min_max.findMinMax([4, 66, 6, 44, 7, 99, 8, 68, 0])).toEqual([0, 99]);
     });

   });

   describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

     it('should return [4] for [4, 4, 4, 4]', function () {
       expect(min_max.findMinMax([4, 4, 4, 4])).toEqual([4]);
     });

     it('should return [7] for [7, 7, 7, 7]', function () {
       expect(min_max.findMinMax([7, 7, 7, 7])).toEqual([7]);
     });

     it('should return [10] for [10, 10, 10, 10]', function () {
       expect(min_max.findMinMax([10, 10, 10, 10])).toEqual([10]);
     });

     it('should return [10] for [1000, 1000, 1000, 1000]', function () {
       expect(min_max.findMinMax([1000, 1000, 1000, 1000])).toEqual([1000]);
     });

   });

 });