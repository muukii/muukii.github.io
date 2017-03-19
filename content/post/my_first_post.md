+++
date = "2017-03-20T01:16:04+09:00"
title = "my_first_post"
draft = false 

+++

Hello, Hugo
こんにちは
本日は快晴

```swift
func mysteryCircle(sides: [String], center: String) -> String {

  func wave(min: Int, max: Int, count: Int) -> [Int] {

    var array = [Int](repeating: max, count: count)

    let side = (min..<max).map { $0 }
    array.replaceSubrange(Range<Int>(side.indices), with: side)
    let center = array.removeLast()
    return array + [center] + Array(array.reversed())
  }

  let chars = sides + [center]

  var message: String = ""
  wave(min: 0, max: chars.count, count: chars.count).forEach { i in
    let c = i

    let indices = wave(min: 0, max: c, count: chars.count)

    indices.forEach { s in
      message.append(chars[s].description)
    }
    message.append("\n")
  }

  return message
}
```

