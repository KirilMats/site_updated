// Registration 
const registration = function(){
	function User(f, l) {
		this.f = f;
		this.l = l;
		this.print = function(){
			console.log(this.l + ' ' + this.f);
		}
	}
	let user = new User('Ivan', 'Ivanov');
	let print = user.print;
	// function customBind(fn, context, ...args){
	// 	return function(){
	// 		fn.apply(context, args);
	// 	}
	// }
	// customBind(print, user, [])();
	// let newprint = print.bind(user);
	// newprint()
	print.call(user);
}();