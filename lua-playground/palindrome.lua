function ispalindrome(str)
  local s = str
  if (type(s) ~= 'string') then
    s = tostring(s)
  end
  local t = {}
  local index = 1

  for value in string.gmatch(s, ".") do
    t[index] = value
    index = index + 1
  end
  local t2 = {}
  local index2 = 1
  for i=index-1,1,-1 do
    t2[index2] = t[i]
    index2 = index2 + 1
  end
  local mirror =  table.concat(t2)
  print('original: ', s)
  print('mirror: ', mirror)
  local ispal = s == mirror
  print('ispalindrome', ispal)
  return ispal
end

