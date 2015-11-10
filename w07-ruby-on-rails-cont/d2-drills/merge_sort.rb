def merge_sort(array)
  # base case
  # method returns the array if it has 1 or 0 elements
  return array if array.length <= 1
  # use midpoint of array to set left and right subarrays
  # the left and right subarrays that you passed to the merge function are created using a recursive call to merge_sort
  middle = array.length / 2
  # first element upto but NOT including middle element
  first_half = array[0...middle]
  left = merge_sort(first_half)
  # middle element up to AND including last element
  second_half = array[middle..-1]
  right = merge_sort(second_half)
  # pass two subarrays to merge function
  p merge(left, right)
end

def merge(left, right)
  # create array to store output
  result = []
  # loop until one subarray is empty
  until left.empty? || right.empty?
    # move the smaller result (left or right) to the results array
    if left.first <= right.first
      result << left.shift
      # result = [left.first], left = []
    else
      result << right.shift
      # result = [right.first], right = []
    end
  end
  # return a concatenation of the three arrays
  result + left + right # [left.first || right.first] + [left] + [right]
end

ary = [7,6,5,9,8,4,3,1,2,0]
nums = [8, 6, 7, 5, 3, 0, 9]
p merge_sort(ary)
p merge_sort(nums)
wdi_22_23  = ["Angelo", "Dani", "Jennifer", "Mikey", "Sam", "Laura E.", "Chris", "Margaux", "Uriel", "Josh", "Francesca", "Racha", "Brian", "Jamey", "Laura b.", "Riley", "Matt", "Ling", "Annie", "John", "Meredith", "Breana", "Michael", "Brendan", "Vince", "Emily A.", "Jeehye", "Emily K.", "Jorge", "Eric", "Natasha", "Scot", "Zain", "Isom", "Noel", "Roy"]
p merge_sort(wdi_22_23)
