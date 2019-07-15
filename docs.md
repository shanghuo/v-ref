---
permalink: /docs.html
title: "V语言中文文档"
description: "V语言中文文档 - 这是一个新兴的语言，虽然有时不是那么稳定，又或者许多功能还在实现途中，但是你不得不相信开源社区的强大！它来了，它改变着！ —— V lang"
lang: "zh_CN"
---
# V语言文档

[手册首页](/)
[文档原文](https://vlang.io/docs)
[源存储库](https://github.com/vlang/v)

## 介绍

V是一种静态类型的编译编程语言，用于构建可维护的软件。

它与Go类似，也受到Oberon，Rust，Swift的影响。

V是一种非常简单的语言。通过阅读这个文档将花费你大约半个小时，到最后你将学习几乎整个语言。

尽管很简单，但它为开发人员提供了很多帮助。你可以用其他语言做任何事情，你也可以用V做。

## Hello World

```
fn main() {
	println('hello world')
}
```

通过`fn`声明一个函数。返回类型在函数名称后面。在这种情况下`main`不返回任何内容，因此省略了类型。

就像在C和所有相关语言中一样，`main`是一个切入点。

`println`是为数不多的内置函数之一。它将值打印到标准输出。

`fn main()`声明可以在一个文件程序中跳过。这在编写小程序、scripts脚本，或者只是学习语言时很有用。为简洁起见，`fn main()`本教程将跳过此步骤。

这意味着“hello world”程序可以向下面这样简单

```
println('hello world')
```

## 注释

```
// 这是单行注释

/* 这是多行注释
   /* 它可以嵌套使用 */
*/
```

 注释嵌套使用的设计，使得V与很多的其它语言有所差异，这需要值得注意。

## 函数

```
fn main() {
	println(add(77, 33))
	println(sub(100, 50))
}

fn add(x int, y int) int {
	return x + y
}

fn sub(x, y int) int {
	return x - y
}
```

同样，类型出现在参数的名称之后。

就像在Go和C中一样，函数不能重载。
这简化了代码并提高了可维护性和可读性。

函数可以在声明之前使用:
`add`和`sub`在`main`之后被声明，但依然可以被`main`直接调用。

对于V中的所有声明都是如此，并且不需要头文件或考虑文件和声明的顺序，这不是那么像C，与JS类似。

## 变量

```
name := 'Bob' 
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)

```

使用`:=`声明和初始化变量。这是在V中声明变量的唯一方法。这意味着变量始终具有初始值。

变量的类型是从右侧的值推断出来的。
要强制使用其他类型，请使用类型转换：
这表达式`T(v)`将值`v`转换为`T`类型。

与大多数其他语言不同，V只允许在函数中定义变量。不允许使用全局（模块级别）变量。V中没有全球状态。

==V语言没有全局变量==

```
mut age := 20
println(age)
age = 21
println(age)
```

要更改变量的值，请使用`=`。在V中，默认情况下变量是不可变的。为了能够更改变量的值，您必须使用`mut`来声明它。
上面那程序中，你需要删除第一行的`mut`才能进行编译。

请注意`:=`和`=`的区别。
`:=`用于声明变量并初始化，`=`用于改变变量值。

```
fn main() {
	age = 21
}
```

此代码将无法编译，因为`age`是未声明过的变量。所有变量都需要在V中声明。

```
fn main() {
	age := 21
}
```

这代码也不会通过编译，因为未使用的变量会导致编译错误。

```
fn main() {
	a := 10 
	if true {
		a := 20
	} 
}
```

与大多数语言不同，V语言不允许使用变量阴影。声明具有已在父作用域中使用的名称的变量将导致编译错误。

## 基本类型

说明|类型
---|---
布尔|bool
字符串|string
有符号整数|i8、i16、i32（别名：int）、i64、i128
无符号整数|u8（别名：byte）、u16、u32、u64、u128
Unicode代码点|rune（这同样是有符号整数i32的别名）
浮点数|f32、f64
其它|byteptr、voidptr

请注意，与C和Go不同，`int`始终是32位整数。

## 字符串

```
name := 'Bob' 
println('Hello, $name!')  // `$`用于字符串插值
println(name.len)

bobby := name + 'by' // + 用于连接字符串
println(bobby) // ==> "Bobby" 

println(bobby.substr(1, 3)) // ==> "ob"  
// println(bobby[1:3]) // 这种语法很可能会替换substr()方法
```

在V中，字符串是只读字节数组。字符串数据使用UTF-8编码。

单引号和双引号都可用于表示字符串（特殊说明：暂不支持双引号）。
为保持一致性，`vfmt`将双引号转换为单引号，除非该字符串包含单引号字符。

字符串是不可变的。这意味着子字符串函数非常有效：
不执行复制，不需要额外的分配。

V中的所有运算符必须在两侧都具有相同类型的值。如果`age`是这样的代码`int`将无法编译: 
`println('age = ' + age)`
我们必须转换`age`为`string`:
`println('age = ' + age.str())`
或使用字符串插值（首选）：
`println('age = $age')`

## 数组

```
mut nums := [1, 2, 3]
println(nums) // "[1, 2, 3]"
println(nums[1]) // "2"

nums << 4
println(nums) // "[1, 2, 3, 4]"

nums << [5, 6, 7]
println(nums) // "[1, 2, 3, 4, 5, 6, 7]"

mut names := ['John']
names << 'Peter' 
names << 'Sam' 
// 名字 << 10  <-- 这不会通过编译。`names`是一个字符串数组 
println(names.len) // "3" 
println('Alex' in names) // "false"

// 我们还可以预先分配一定数量的元素。
nr_ids := 50
ids := [0 ; nr_ids] // 这会创建一个包含50个零的数组

```

数组类型由第一个元素决定：`[1, 2, 3]` is 是一个整数int类型数组(`[]int`)。
`['a', 'b']`是一个字符串类型数组(`[]string`).

所有元素必须具有相同的类型。`[1, 'a']` 无法通过编译。

`<<`是一个将值附加到数组末尾的运算符。它还可以附加到整个数组。
`.len`返回数组的长度。请注意，它是一个只读属性，用户无法修改。默认情况下，所有导出的字段都是只读的。
`val in array`：如果数组包含`val`，那么返回true.

`.contains(val)`方法可以检测数组中是否包含某元素，返回值bool类型。

数据截取可以使用`.slice(start,end)`、`.left(pos)`、`.right(pos)`方法。

## Maps

```
mut m := map[string]int{} // 现在只允许带字符串key的map
m['one'] = 1
println(m['one']) // ==> "1"  
println(m['bad_key']) // ==> "0"  
// TODO: 实现检查密钥是否存在的方法

numbers := { // TODO: 此语法尚未实现
	'one': 1,
	'two': 2,
}
```

## If

```
a := 10 
b := 20 
if a < b { 
	println('$a < $b') 
} else if a > b { 
	println('$a > $b') 
} else { 
	println('$a == $b') 
}
```

`if` 语句非常简单，与大多数其他语言类似。

与其他类C语言不同，条件周围没有括号，并且始终需要大括号。

`if` 可以用作表达式：
```
num := 777
s := if num % 2 == 0 {
	'even'
}
else {
	'odd'
}
println(s) // ==> "odd"
```

## In 操作

`in`允许检查数组是否包含元素。

```
nums := [1, 2, 3]
println(1 in nums) // ==> true
```

它对于编写更清晰，更紧凑的布尔表达式也很有用：

```
if parser.token == .plus || parser.token == .minus || parser.token == .div || parser.token == .mult {
	... 
}

if parser.token in [.plus, .minus, .div, .mult] {
	... 
}
```

V优化了这样的表达式，因此`if`上面的两个语句都生成相同的机器代码，不会创建任何数组。

## For 循环

V只有一个循环结构：`for`.

```
numbers := [1, 2, 3, 4, 5]
for num in numbers {
	println(num)
}
names := ['Sam', 'Peter']
for i, name in names {
	println('$i) $name')  // Output: 0) Sam
}                             //         1) Peter
```

这`for value in`循环用于遍历数组的元素。

如果需要索引index，则可以使用`for index, value in`的形式。

请注意，这值是只读的。
如果需要在循环时修改数组，则必须使用索引：

```
mut numbers := [1, 2, 3, 4, 5]
for i, num in numbers {
	println(num)
	numbers[i] = 0
}
```

下面这种形式的循环类似于其他语言的`while`循环。
一旦布尔条件求值为false，循环将停止迭代。

```
mut sum := 0
mut i := 0
for i <= 100 {
	sum += i
	i++
}
println(sum) // ==> "5050"
```

同样的，条件周围没有括号，并且总是需要大括号。

```
mut num := 0
for {
	num++
	if num >= 10 {
		break 
	} 
}
println(num) // ==> "10"
```

上例中，for循环的条件省略了，这是允许的，会导致无限循环。

```
for i := 0; i < 10; i++ {
	println(i)
}
```

最后，还有传统的C风格`for`循环。
它比`while`形式更安全，因为`while`很容易忘记更新计数器并陷入无限循环。

这里`i`不需要声明`mut`，因为它在每次循环中都被重新定义并赋值。

## Switch

```
os := 'windows' 
print('V is running on ')
switch os {
case 'darwin':
	println('macOS.')
case 'linux':
	println('Linux.')
default:
	println(os) 
}
// TODO: 用匹配表达式替换
```

switch语句是编写`if - else`语句序列的较短方式。它运行第一种情况，其值等于条件表达式。
与C不同，每个块的末尾都不需要`break`语句。

## 结构体

```
struct Point {
	x int
	y int 
}

p := Point{
	x: 10 
	y: 20 
} 
println(p.x) // 使用fields访问结构字段
```

结构在堆栈上分配。要在堆上分配结构并获取指向它的指针，请使用`&`前缀：

```
pointer := &Point{10, 10}  // 具有3个或更少字段的结构的，替代初始化语法
println(pointer.x) // 指针用于访问相同字段的语法
```

V没有子类，但它支持嵌入式结构：

```

// TODO: 这将在7月晚些时候实现
struct Button {
	Widget
	title string
}

button := new_button('Click me')
button.set_pos(x, y)

// 没有嵌入，我们必须这样做
button.widget.set_pos(x,y)

```

## 访问修饰符

结构字段默认是私有的和不可变的（使结构也是不可变的）。
他们的访问修饰符可以用`pub`和`mut`来改变。总共有5种可能的选择：

```
struct Foo {
	a int     // private immutable(default) （私有不可变(默认)）
mut: 
	b int     // private mutable （私有可变）
	c int     // (you can list multiple fields with the same access modifier)（可以列出具有相同访问修饰符的多个字段）   
pub: 
	d int     // public immmutable (readonly) （公有不可变(只读)）
pub mut: 
	e int     // public, but mutable only in parent module （公有，但仅在父模块中可变）
pub mut mut: 
	f int 	  // public and mutable both inside and outside parent module （父模块内部和外部都是公共的和可变的）
}                 // (not recommended to use, that's why it's so verbose)（不建议使用，这就是为什么它如此冗长）
```

例如，这`string`是`builtin`模块中定义的类型：

```
struct string {
	str byteptr
pub:
	len int
}
```

从这个定义中很容易看出它`string`是一个不可变类型。

具有字符串数据的字节指针根本无法在外部`builtin`访问。
`len`字段是公开的，但不是可变的。

```
fn main() {
	str := 'hello' 
	len := str.len // OK  
	str.len++      // 编译错误  
}
```

## 方法

```
struct User {
	age int 
}

fn (u User) can_register() bool {
	return u.age > 16 
}

user := User{age: 10} 
println(user.can_register()) // ==> "false" 

user2 := User{age: 20} 
println(user2.can_register()) // ==> "true" 
```

V语言中没有类的概念，但是你可以在结构体 struct 上定义方法(Methods)。

方法是具有特殊接收器参数的函数。

方法(Methods)是具有特殊接收器参数的函数。接收器出现在`fn`关键字和方法名称之间的参数列表中(和Go语言类似)。

在上面的示例中，`can_register`方法具有名为`u`的`User`结构体的接收器。
不是使用像`self`或`this`这样的名称，而是使用短名称，最好是所属结构体名称的首字母小写。

## 接收器、纯函数

V函数默认是纯的，这意味着它们的返回值仅由它们的参数决定，并且它们的evaluation没有副作用。
这是通过缺少全局变量来实现的，默认情况下所有函数参数都是不可变的，即使传递了引用。

然而，V不是纯函数式语言。可以使用相同的关键字修改函数参数`mut`：

```
struct User {
mut:
	is_registered bool 
}

fn (u mut User) register() {
	u.is_registered = true 
}

mut user := User{} 
println(user.is_registered) // ==> "false"  
user.register() 
println(user.is_registered) // ==> "true" 
```

在此示例中，接收器（它只是第一个参数）被标记为可变，因此`register()`可以更改用户对象。
同样适用于非接收者参数：

```
fn multiply_by_2(arr mut []int) {
	for i := 0; i < arr.len; i++ {
		arr[i] *= 2
	}
}

mut nums := [1, 2, 3]
multiply_by_2(mut nums)
println(nums) // ==> "[2, 4, 6]"
```

注意，您必须在调用此函数`mut`之前添加`nums`。这清楚地表明被调用的函数将修改该值。
最好返回值而不是修改参数。修改参数只应在应用程序的性能关键部分中完成，以减少分配和复制。

使用`user.register()`或`user = register(user)` 
代替`register(mut user)`.

V可以很容易地返回对象的修改版本： 

```
fn register(u User) User { 
	return { u | is_registered: true } 
}

user = register(user)
```

## 高阶函数
High order functions

TODO（去做ing）

## 常量

```
const (
	PI    = 3.14
	World = '世界'
)

println(PI)
println(World)
```

常量声明为`const`。它们只能在模块级别（功能之外）定义。

常量名称必须大写。这有助于将它们与变量区分开来。

永远不能改变常量的值。

V常量比大多数语言更灵活。您可以指定更复杂的值：

```
struct Color {
        r int
        g int
        b int
}

fn (c Color) str() string { return '{$c.r, $c.g, $c.b}' }

fn rgb(r, g, b int) Color { return Color{r: r, g: g, b: b} }

const (
        Numbers = [1, 2, 3]

        Red  = Color{r: 255, g: 0, b: 0}
        Blue = rgb(0, 0, 255)
)

println(Numbers)
println(Red)
println(Blue)
```

V语言不允许使用全局变量，因此常量非常有用。

## 模块

V是一种非常模块化的语言。它鼓励创建可重用模块，这非常简单。
要创建新模块，请使用代码创建包含模块名称和.v文件的目录：

```
cd ~/code/modules
mkdir mymodule
vim mymodule/mymodule.v

// mymodule.v
module mymodule

// 要导出函数，我们必须使用`pub`
pub fn say_hi() {
	println('hello from mymodule!')
}
```

你可以编写多个.v文件在`mymodule/`中。

编译模块也很简单，只要执行命令：`v -lib ~/code/modules/mymodule`。

然后，您现在可以在代码中使用它：

```
module main

import mymodule

fn main() {
	mymodule.say_hi()
}
```

请注意，每次调用外部函数时都必须指定模块。这看起来似乎很冗长，但它使代码更易读，更容易理解，因为它始终清楚从哪个模块调用哪个函数。特别是在大型代码库中。

模块名称应短，不超过10个字符。不允许循环导入。

您可以在任何地方创建模块

所有模块都静态编译为单个可执行文件。

## 接口

```
struct Dog {}
struct Cat {}

fn (d Dog) speak() string { 
	return 'woof'
}

fn (c Cat) speak() string { 
	return 'meow' 
}

interface Speaker {
	speak() string
}

fn perform(s Speaker) { 
	println(s.speak())
}

dog := Dog{} 
cat := Cat{} 
perform(dog) // ==> "woof" 
perform(cat) // ==> "meow" 
```

类型通过实现其方法来实现接口。没有明确的意图声明，没有“implements”关键字。

## 枚举
Enums

```

enum Color {
	red green blue 
}

mut color := Color.red
// V知道`color`是'Color`。这里不需要使用`Color.green`。
color = .green 
println(color) // ==> "1"  TODO: print "green"? 

```

## 可选类型和错误处理
Option/Result types & error handling

```
struct User {
	id int 
	name string
}

struct Repo {
	users []User 
}

fn new_repo() Repo {
	return Repo {
		users: [User{1, 'Andrew'}, User {2, 'Bob'}, User {10, 'Charles'}]
	}
}

fn (r Repo) find_user_by_id(id int) ?User { 
	for user in r.users {
		if user.id == id {
			// V自动将其包装为选项类型
		} 
	} 
	return error('User $id not found') 
}

fn main() {
	repo := new_repo() 
	user := repo.find_user_by_id(10) or { // 选项类型必须由'or'块处理
		return  // `or`块必须以`return`，`break`或`continue`结束
	} 
	println(user.id) // ==> "10"  
	println(user.name) // ==> 'Charles'
}
```

V将Option和Result组合成一种类型，因此您无需决定使用哪种类型。

将函数“升级”到可选函数所需的工作量是最小的：您必须`?`在返回类型中添加一个并在出现错误时返回错误。

如果您不需要返回错误，可以简单地说`return none`。（TODO：`none`尚未实现）。

这是处理V中错误的主要方法。它们仍然是值，就像在Go中一样，但优点是错误无法处理，并且处理它们的冗长要少得多。

您还可以传播错误：

```
resp := http.get(url)?
println(resp.body)
```

`http.get`返回的是`?http.Response`可选类型。它被调用`?`，错误发生，将传播到调用函数（必须返回一个可选项），这里导致`main`函数抛出异常。

基本上上面的代码是一个较短的版本

```
resp := http.get(url) or {
	panic(err)
}
println(resp.body)
```

V没有办法强制打开一个可选项（比如`Rust`的`unwrap()`或`Swift`的`!`）。 你必须使用`or { panic(err) }`代替。

## 泛型
Generics（7月实现）

```
struct Repo<T> {
	db DB
}

fn new_repo<T>(db DB) Repo<T> {
	return Repo<T>{db: db}
}

// 这是一个通用函数。V将为它使用的每种类型生成它。
fn (r Repo<T>) find_by_id(id int) ?T {  
	table_name := T.name //在此示例中，获取类型的名称会为我们提供表名 
	return r.db.query_one<T>('select * from $table_name where id = ?', id)
}

db := new_db()
users_repo := new_repo<User>(db)
posts_repo := new_repo<Post>(db)
user := users_repo.find_by_id(1)? 
post := posts_repo.find_by_id(1)?

```

## 并发
Concurrency

并发模型与Go非常相似。要`foo()`同时运行，只需调用它`go foo()`。

现在，它在一个新的系统线程中启动该功能。很快将实现goroutines和调度程序。

## JSON解析
Decoding JSON

```
struct User {
	name string
	age  int 
	foo  Foo    [skip]  // 使用`skip`属性跳过某些字段
}

data := '{ "name": "Frodo", "age": 25 }'
user := json.decode(User, data) or {
	eprintln('Failed to decode json')
	return 
} 
println(user.name)
println(user.age)
```

JSON现在非常流行，这就是内置JSON支持的原因。

`json.decode`函数 的第一个参数是要解码的类型。第二个参数是JSON字符串。

V生成用于JSON编码和解码的代码。不使用运行时反射。这导致更好的性能。

## 测试代码
Testing

```
// hello.v 
fn hello() string {
	return 'Hello world'
}

// hello_test.v 
fn test_hello() {
    assert hello() == 'Hello world'
}
```

所有测试功能都必须放在`*_test.v`文件中并开始`test_`。要运行测试，请运行`v hello_test.v`。 要测试整个模块，请运行`v test mymodule`。

## 内存管理

V没有垃圾收集或引用计数。在编译期间清理它可以做的事情。例如：

```
fn draw_text(s string, x, y int) {
	...
}

fn draw_scene() {
	... 
	draw_text('hello $name1', 10, 10)
	draw_text('hello $name2', 100, 10)
	draw_text(strings.repeat('X', 10000), 10, 50)
	... 
}
```

字符串不会转义`draw_text`，因此在函数退出时会清除它们。
实际上，前两次调用根本不会产生任何分配。这两个字符串很小，V将为它们使用预分配的缓冲区。

对于更复杂的情况，需要手动内存管理。这将很快修复。

V将在运行时检测内存泄漏并报告它们。要清理（例如）数组，请使用以下`free()`方法：

```
numbers := [0; 1000000] 
...
numbers.free()
```

## Defer

TODO

## vfmt

TODO

# 高级文档

## 从V调用C函数

```
#flag -lsqlite3

#include "sqlite3.h"

struct C.sqlite3 
struct C.sqlite3_stmt

fn C.sqlite3_column_int(C.sqlite_stmt, int) int

fn main() {
	path := 'sqlite3_users.db' 
	db := &C.sqlite3{} 
	C.sqlite3_open(path.cstr(), &db)

	query := 'select count(*) from users' 
	stmt := &C.sqlite3_stmt{} 
	C.sqlite3_prepare_v2(db, query.cstr(), - 1, &stmt, 0)
	C.sqlite3_step(stmt) 
	nr_users := C.sqlite3_column_int(res, 0)
	C.sqlite3_finalize(res)
	println(nr_users) 
}
```

C字符串可以转换为V字符串`string(cstring)`.

查看socket.v以获取从V调用C代码的示例：[https://github.com/vlang/v/blob/master/vlib/net/socket.v](https://github.com/vlang/v/blob/master/vlib/net/socket.v)

## 编译时判断
Compile time if

```
$if windows {
	println('Windows')  
}  
$if linux {
	println('Linux') 
} 
$if mac {
	println('macOS') 
}
```

编译时间`if`使用`$`开头。现在它只能用于检测操作系统。

## 高效序列化
Reflection via codegen

内置JSON支持很不错，但V还允许您为任何事物创建高效的序列化器：

```
// TODO: 计划在七月实现
fn decode<T>(data string) T {
        mut result := T{}
        for field in T.fields {
                if field.typ == 'string' {
                        result.$field = get_string(data, field.name)
                } else if field.typ == 'int' {
                        result.$field = get_int(data, field.name)
                }
        }
        return result
}

// 生成到:
fn decode_User(data string) User {
        mut result := User{}
        result.name = get_string(data, 'name')
        result.age = get_int(data, 'age')
        return result
}
```

## 运算符重载
Limited operator overloading

```
struct Vec {
	x int
	y int
}

fn (a Vec) str() string { 
	return '{$a.x, $a.y}' 
}

fn (a Vec) + (b Vec) Vec {
	return Vec {
		a.x + b.x, 
		a.y + b.y 
	}
}

fn (a Vec) - (b Vec) Vec {
	return Vec {
		a.x - b.x, 
		a.y - b.y
	}
}

fn main() { 
	a := Vec{2, 3}
	b := Vec{4, 5}
	println(a + b) // ==> "{6, 8}"  
	println(a - b) // ==> "{-2, -2}"  
}
```

运算符重载违背了V的简单性和可预测性的理念。但由于科学和图形应用程序属于V域，因此为了提高可读性，运算符重载非常重要：

`a.add(b).add(c.mul(d))`比`a + b + c * d`可读性差得多。

为了提高安全性和可维护性，操作员重载有几个局限性：

- 运算符重载只能使用`+, -, *, /`
- 不允许在操作员函数内调用其他函数
- 运算符函数无法修改其参数
- 两个参数必须具有相同的类型（就像V中的所有运算符一样）

##  内联汇编

TODO: 尚未实现

```
fn main() {
	a := 10
	asm x64 {
		mov eax, [a]
		add eax, 10
		mov [a], eax
	}
}
```

## 将C/C ++翻译成V

TODO: 将C翻译为V将于7月实现。C++到V将于今年晚些时候推出。

V可以将您的C / C ++代码转换为人类可读的V代码。

让我们先创建一个简单的程序`test.cpp`：

```
#include <vector>
#include <string>
#include <iostream>

int main() {
        std::vector<std::string> s;
        s.push_back("V is ");
        s.push_back("awesome");
        std::cout << s.size() << std::endl;
        return 0;
}
```

执行`v translate test.cpp`V将生成`test.v`:

```
fn main {
        mut s := []
	s << 'V is '
	s << 'awesome'
	println(s.len) 
}
```

一个在线C / C ++到V的翻译即将推出。

什么时候应该翻译C代码，什么时候应该从V调用C代码？

如果您有经过良好编写且经过良好测试的C代码，那么您当然可以直接从V调用此C代码。

将其翻译为V有以下几个优点：

- 如果您计划开发该代码库，那么现在您可以使用一种语言编写所有内容，这样可以更安全，更容易开发。
- 交叉编译变得更加容易。您根本不必担心它。
- 没有更多的构建标志和包含文件。

## 热更新
Hot code reloading

TODO

## 交叉编译

要交叉编译项目，只需执行下面相应项即可

```
v -os windows .
```

或者

```
v -os linux .
```

（暂时无法对macOS进行交叉编译。）
如果您没有任何C依赖项，那就是您需要做的。即使在使用`ui`模块或图形应用程序编译GUI应用程序时也可以使用`gg`。

您需要安装Clang，LLD链接器，并下载包含库和包含Windows和Linux文件的zip文件。V将为您提供链接。

## 跨平台脚本
Cross-platform shell scripts in V

（将在7月晚些时候推出。）

V可以用作Bash的替代方案来编写部署脚本，构建脚本等。

使用V的优势在于语言的简单性和可预测性以及跨平台支持。“V脚本”在类Unix系统和Windows上运行。

使用`#v`指令启动程序。它将使`os`模块中的所有函数全局化（例如，您可以使用`ls()`而不是代替`os.ls()`）

```
#v

rm('build/*') 
// Same as:  
for file in ls('build/') {
	rm(file) 
}

mv('*.v', 'build/') 
// Same as:  
for file in ls('.') {
	if file.ends_with('.v') { 
		mv(file, 'build/') 
	} 
}
```

现在您可以像普通的V程序一样编译它，并获得可以在任何地方部署和运行的可执行文件：
`v deploy.v && ./deploy`

或者只是像传统的bash脚本一样运行它：
`v run deploy.v`

## 关键词
Appendix I: Keywords

V有22个关键字：

```
break 
const  
continue 
defer 
else 
enum 
fn
for
go
goto
if
import
in 
interface 
match 
module 
mut 
or 
pub 
return
struct
type
```

## 运算符
Appendix II: Operators

基本运算符
<table>
<tr><th>符号</th><th>说明</th><th>英文</th><th>数据类型</th></tr>
<tr><td>+</td><td>加</td><td>sum</td><td>integers, floats, strings</td></tr>
<tr><td>-</td><td>减</td><td>difference</td><td>integers, floats</td></tr>
<tr><td>*</td><td>乘</td><td>product</td><td>integers, floats</td></tr>
<tr><td>/</td><td>除</td><td>quotient</td><td>integers, floats</td></tr>
<tr><td>%</td><td>余</td><td>remainder</td><td>integers</td></tr>
<tr><td>&</td><td>位与</td><td>bitwise AND</td><td>integers</td></tr>
<tr><td>|</td><td>位或</td><td>bitwise OR</td><td>integers</td></tr>
<tr><td>^</td><td>位异或</td><td>bitwise XOR</td><td>integers</td></tr>
<tr><td>&lt;&lt;</td><td>左移</td><td>left shift</td><td>integer &lt;&lt; unsigned integer</td></tr>
<tr><td>>></td><td>右移</td><td>right shift</td><td>integer >> unsigned integer</td></tr>
</table>

运算符优先级
<table>
<tr><th>优先级</th><th>运算符</th></tr>
<tr><td>5</td><td>*  /  %  &lt;&lt;  >>  &</td></tr>
<tr><td>4</td><td>+  -  |  ^</td></tr>
<tr><td>3</td><td>==  !=  &lt;  &lt;=  >  >=</td></tr>
<tr><td>2</td><td>&&</td></tr>
<tr><td>1</td><td>||</td></tr>
</table>

分配运算符
```
+=   -=   *=   /=   %=
&=   |=   ^=
>>=  <<=
```

<script src="/script.js"></script>
