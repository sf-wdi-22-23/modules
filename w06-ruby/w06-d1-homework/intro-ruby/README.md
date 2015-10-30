# <img src="http://engineering.yp.com/img/ruby-logo.png" width="50"> Intro to Ruby

| Objectives |
| :--- |
| Identify data types, operators, and control flow patterns in JavaScript and utilize them in Ruby |
| Apply Ruby control flow to create command line applications |

## Framing for the Week

As we learn Ruby, it's important to revisit how we learned our first language and use that to organize the study of our new language. Learning our second programming language is a process of translating concepts, expressions, and patterns from our familiar language into our new language. Learning our first language involved more identification and comprehension of the knowledge required to implement our first programs. We should begin by organizing this knowledge to build a better understanding as we transition to Ruby.

## Types of Knowledge

* **Declarative Knowledge** > your "what is" knowledge, i.e. describing what something is
* **Imperative knowledge** > your "how to" knowledge, i.e. describing how to do something

## Parts of A Language

* `Primitives`
* `Combinations`
* `Abstractions`


## Discussion Questions

* What is JavaScript? What does it look like?
* What are some of the primitives in JavaScript?
  * Think data types, variable declarations, conditionals, functions, etc.
* How did we use JavaScript to build things? How did we build up from the fundamentals of the language?
* What could possibly be different in another language? How could we change the syntax, but keep the semantics?

### Ruby vs. JS Primitives

Let's recall some of our JS Data Types


#### Javascript

* `null`, `undefined`
* Strings
* Booleans
* Number
  * `.toString`
* Arrays
  `indexOf`,`splice`, `slice`
* Objects
  * `["some_key"]`, `.some_key`
* operators
  * `==`, `===`, `>`, `>=`, ..
  * `!`, `||`, `&&`
  * `+`, `-`, `/`, `*`
* Console methods
    * `console.log`
    * `prompt`

#### Ruby

* `nil`
* Integers
    * Fixnum
    * Bignum
     * `to_s`
* Floats
* Strings
  * `.to_i` and `.to_f` `*INTEGER`
* Symbols
* Ranges
* Booleans
* Arrays
  * `[x..y]`, `[x...y]`, `index`
* Hashes
  * `{ :key => value }`
  * `{ key: value }` which is the same as `{:key =>value }`
  * `[some_key]` and `[some_key]=`
  * `key`,`.keys`, `.each`
* operators
  * `||=`, `*=`, `/=`
  * `==`, `.equal?`,
  * `!`, `not`, `||`, `&&`
  * `**`, `+`, `-`, `/`, `*`
* General Delimited Input
    * `%w`, `%r`
* Console Methods
    * `puts`, `p`
    * `gets` and `gets.chomp`

### Control flow


#### Javascript ([Some Control Flow Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements))

* Conditionals
    * `if`, `else if`, `else`, `switch`, ...
* Loops
    * `do-while`, `while`,  ...
* iterators,
    * `for-in`
* Exceptions
    * `try`, `catch`

#### Ruby ([Some Control Flow Structures](http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures))

* Conditionals
    * `if`, `elsif`, `else`, `unless`, `case when else` ...
* Loops
    * `until`, `while`, `times` ...
* iterators,
    * `.each`, `for ... in`
* Exceptions
    *  `begin`, `rescue`, `ensure`


### Some Abstractions

#### Javascript

* Function
    * Anonymous: `function (param1, [..param2, [...]]){...}`,
    * Named: `function Name(param1, [..param2, [...]]){...}`
    * Uses lexical scope
    * Used as values
    * require explicit return
    * all `params` are optional

#### Ruby   

 * Function
    * uses `def`
    * Do not capture scope
    * Not used as values
    * optional parameters must be specified
    * implicitly returns last evaluation

* block
    * used with `.each`, `.map`, et cetera

    ```
    some_method do |param1, [param2, [...]]
        # some code
    end

    ```
    * captures scope

## Intro to Ruby

#### Define a method

```ruby
def say_hello
  puts "Hello"
end

say_hello
```

#### Define a method with a parameter

```ruby
def say(something)
  puts something
end

say('hello')
say 'gello'
```

#### Define a method that operates on two parameters
```ruby
def add_numbers(first, second)
  puts first + second
end

add_numbers(1,2)
add_numbers 1, 2
```

#### Printing and returning are different
```ruby
def add_numbers_quietly(first, second)
  first + second
end

add_numbers_quietly(1,2)
add_numbers_quietly 1, 2
```

#### Methods in Ruby always return the value of the last evaluated expression
```ruby
def implicitly_return_5
  if true
    5
  end
end

implicitly_return_5
```

* What was the value of the if statement?
* `status_of_world = if 1 == 2 then "messed up" else "a-o-k" end`
* `result = 1 == 2 ? "wuh oh" : "phew"`

#### Parameters can have default values

```ruby
def say(something = "Hello")
  puts something
end

say # prints "Hello"
say "Goodbye" # prints "Goodbye"
```
#### Recursion: methods can call themselves

```ruby
def recurse(depth)
  if depth > 0
    puts "Spiraling down..."
    recurse(depth - 1)
    puts "Spiraling up..."
  else
    puts "Bottom of the rabbit hole"
  end
end

recurse(5)
recurse 5
```

## The biggest difference from javascript

#### Functions have locally scoped variables
The following code wont work. Why?
```ruby
foo = 1

def do_stuff
  foo += 1
  bar = 1
  puts foo
  puts bar
end

do_stuff

puts foo
puts bar
```

The problem is the ruby is locally scoped. Meaning that a function only has access to its variables and the variables it defined inside of itself.

```ruby
foo = 1

def do_stuff
  foo = 1
  foo += 1
  bar = 1
  puts foo
  puts bar
end

do_stuff

puts foo
puts bar

def do_stuff2(x)
  foo = x
  foo += 1
  bar = 1
  puts foo
  puts bar
end

puts do_stuff2(foo)
```

## Exercises

[Exercises](exercises.md)
