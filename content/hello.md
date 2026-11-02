---
title: Hello World
tags: [hello, goodbye]
description: no
pubDate: 02/11/2026
modDate: 02/11/2026
authors: [Janky, Jaynx]
---

# Hello World

```js [server.js]
const express = require('express')
const app = express()
```

```js
type LayoutSize = 'compact' | 'standard' | 'wide'

export const sizings = {
    fontAwesomeFont: 'text-[2rem]',
    default: [
        'w-full',
        'min-w-0',
        'wrap-break-word',
        'mx-auto',
        'items-center',
        'justify-center'
    ],
    /**
    * @param {string} size size='standard' - A value where size is specified from 3 types(`compact`, `standard`, `wide`), defaults to `standard` if left blank.
    * @returns {string} Returns the size specified, else fallback to `standard`.
    *
    */
    defaults: function(size: LayoutSize = 'standard'): string {
        const sizeMap: Record<LayoutSize, string> = {
            compact: 'max-w-[60rem]',
            standard: 'max-w-[80rem]',
            wide: 'max-w-[100rem]'
        }

        return sizeMap[size]
    }
}
```

```go
package main

import "fmt"

// Closing a channel indicates that no more values will be sent on it. This can be useful to communicate completion to the channel's receivers
func ClosingChannels() {
	// In this example we'll use a 'jobs' channel to communicate work to be done from the main function goroutine to a worker goroutine. When we have no more jobs for the worker we'll 'close' the 'jobs' channel
    jobs := make(chan int, 5)
    done := make(chan bool)

	// Here's the worker goroutine. It repeatedly receives from 'jobs' the 'for' loop. In this special 2-value form of receive, the 'more' value will be 'false' if 'jobs' has been closed and all values in the channel have already been received. We use this to notify on 'done' when we've worked all our jobs
    go func() {
        for {
            j, more := <- jobs
            if more {
                fmt.Println("received job", j)
            } else {
                fmt.Println("received all jobs")
                done <- true
                return
            }
        }
    }()

	// This sends 3 jobs to the worker over the 'jobs' channel, then closes it
    for j := 1; j <= 3; j++ {
        jobs <- j
        fmt.Println("sent job", j)
    }

    close(jobs)
    fmt.Println("sent all jobs")

	// We await the worker using the synchronization approach we saw earlier
    <- done

	// Reading from a closed channel succeeds immediately, returning the zero value of the underlying type. The optional second return value is 'true' if the value received was delivered by a successful send operation to the channel, or 'false' if it was zero value generated because the channel is closed and empty
    _, ok := <- jobs
    fmt.Println("received more jobs:", ok)
}
```


~~Visual Studio Code~~

https://github.com/comarkdown/comark/tree/main/examples/2.vite/vue
https://comark.dev/examples/vite/vue

::alert{type="warning"}
This is a warning message!
::

https://comark.dev/play/editor?example=all-features

[pixels to relative em converter](https://nekocalc.com/px-to-rem-converter){target = "blank"}

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

test built-in components

**we need UI for this**

*we really need a UI for this*

***we do need a UI for this***