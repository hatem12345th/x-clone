import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const user = 'hatem';

    if ( user )
     return NextResponse.redirect(
        new URL('/', request.url)
    )
}
 
// See "Matching Paths" below to learn more

export const config = {
  matcher: ['/admin','/posts/:path*'],
}








/*    const response = NextResponse.next()   
    const themePreference = request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme","dark")
    }
    else{
        response.cookies.set("theme","light")

    }    
        */
   // response.headers.set("user","hatem")
    //return response
