function romantodecimal(roman)
  local romanchars = {i=1, v=5, x=10, l=50, c=100, d=500, m=1000}
  local romantable = {}
  local i = 1
  for v in string.gmatch(roman, '.') do
    romantable[i] = v
    i = i + 1
  end
  local decimal = 0;
  local currentdecimal = 0;
  local tablelength = #romantable
  for j = 1,tablelength do
    currentdecimal = romanchars[romantable[j]]
    local nextdecimal = j < tablelength and romanchars[romantable[j+1]] or 0
    if nextdecimal > currentdecimal then
      decimal = decimal - currentdecimal
    else
      decimal = decimal + currentdecimal
    end
  end
  print(decimal)
end

