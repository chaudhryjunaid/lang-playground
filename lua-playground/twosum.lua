function findsum(arr, num)
  for i, val in ipairs(arr) do
    for j, v in ipairs(arr) do
      if i ~= j and val + v == num then
        return {i, j}
      end
    end
  end
  error('no two elements form this sum')
end

