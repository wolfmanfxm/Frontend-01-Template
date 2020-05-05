
import <Foundation/Foundation.h>
import <JavaScriptCore/JavaScriptCore.h>

/*  基础使用说明

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        //  var context = new JSContext
        JSContext* context = [[JSContext alloc] init];       //  alloc 分配一块内存，init 初始化

        //  context.evaluateScript("")
        [context evaluateScript:@""];                       //  在 @"" 中写 JS 代码

        //  var result = 1 + 1;
        JSValue* result = [context evaluateScript:@"1 + 1"];

        //  console.log(result.toString());
        NSLog(@"%@", [result toString]);

        NSLog(@"Hello,World!");                             //  输出 'Hello,World!'
    }
    return 0;
}
*/

/*  事件循环

int main(int argc, const char * argv[]) {
    @autoreleasepool {

        JSContext* context = [[JSContext alloc] init];       //  alloc 分配一块内存，init 初始化
        JSValue* result;

        while(true){
            char sourcecode[1024];          //  声明一个长度为 1024 的 buffer 变量 sourcecode

            scanf("%s", &sourcecode);       //  扫描输入的字符串
            NSString* code = [NSString stringWithUTF8String:sourcecode];    //  stringWithUTF8String  只能输入 UTF8 的字符

            result = [context evaluateScript:code];

            NSLog(@"%@", [result toString]);
        }
    }
    return 0;
}
*/

/*  function 调用
    
    [context evaluateScript:code]   执行代码
    [result callWithArguments:@[arg]]   调用函数

int main(int argc, const char * argv[]) {
    @autoreleasepool {

        JSContext* context = [[JSContext alloc] init];       

        char sourcecode[1024];          

        scanf("%s", &sourcecode);    
        NSString* code = @"(function(x){ return x * x; })";

        JSValue* result = [context evaluateScript:code];        //  result = function(x){ return x * x; };

        JSValue* arg = [JSValue valueWithInt32:sourcecode inContext:context];

        //  console.log(result(arg));
        NSLog(@"%@", [[result callWithArguments:@[arg]] toString]);
    }
    return 0;
} 
*/

int main(int argc, const char * argv[]) {
    @autoreleasepool {

        JSContext* context = [[JSContext alloc] init];       

        NSString* code = @"new Promise(resolve => resolve()).then(()=>this.a = 3), function(){return this.a};";

        JSValue* result = [context evaluateScript:code];

        NSLog(@"%@", [[result callWithArguments:@[]] toString]);
    }
    return 0;
}