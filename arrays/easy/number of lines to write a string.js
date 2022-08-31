var numberOfLines = function (widths, s) {
    let lines = 0
    const maxPixels = 100
    const base = 'a'.charCodeAt(0)
    console.log(base)
    console.log(s.charCodeAt(1) - base)
    console.log(widths[s.charCodeAt(0) - base])
    
    let currentPixels = 0
//  
    for (let i = 0; i < s.length; i++) {
      const width = widths[s.charCodeAt(i) - base]
      currentPixels += width
  
      if (currentPixels > maxPixels) {
        currentPixels = width
        lines += 1
      }
    }
    return (currentPixels > 0) ? [lines + 1, currentPixels] : [lines, currentPixels]
  };

console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"))


