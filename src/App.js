import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {


  
  return (
    <main>
       <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
<!-- BACK TO TOP FUNCTINALITY - end-->

<h1>Mardz Online Songhits</h1> 
<!-- Beginning of tippin.me Button -->
<div id="tippin-button" data-dest="JunjieBalatero" style="background:#26282F"></div>
<script src="https://tippin.me/buttons/tip.js" type="text/javascript"></script>
<!-- End of tippin.me Button -->

<!-- SEARCH FUNCTINALITY - START-->
<h2>Mardz Search</h2>
<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for a song.." title="Type in a song">
<!-- SEARCH FUNCTINALITY - END-->

<!-- Beginning of Songhits List -->

<ul id="myUL">

<p><a class="accordion-toggle" href="#content-9z"><li>Take It Easy - Eagles | 139 bpm</a></li></p>
<div class="accordion" id="content-9z"> 
<pre>           
G  Am7/G D7sus/G  2x
   
G

          G
Well, I'm running down the road 

tryin' to loosen my load 
                     D     C
I've got seven women on my mind, 
G
Four that wanna own me, 
D
Two that wanna stone me, 
C                          G
One says she's a friend of mine, 

        Em  D         C  G
Take it easy, take it easy 
              Am                C
Don't let the sound of your own wheels 
          Em
Drive you crazy 
        C                  G
Lighten up while you still can 
           C           G
Don't even try to understand 
            Am                 C
Just find a place to make your stand 
            G
and take it easy 

            G
Well, I'm a standing on a corner 

in Winslow Arizona
            D        C
Such a fine sight to see 
       G                   D
It's a girl, my Lord, in a flatbed
             C                      G
Ford slowin' down to take a look at me 

         Em  D           C  G
Come on, baby, don't say maybe 
        Am                 C
I gotta know if your sweet love is 
      Em
gonna save me 
       C               G
We may lose and we may win though 
        C              G
we will never be here again 
        Am               C
so open up, I'm climbin' in,
        G 
take it easy..."Alright"
         G
Well I'm running down the road trying to loosen 
                                D     C
my load, got a world of trouble on my mind 
G                       D
lookin' for a lover who won't blow my 
             C          G
cover, she's so hard to find 

        Em  D         C  G
Take it easy, take it easy 
              Am                C                Em
don't let the sound of them old wheels drive you crazy,
        C  G            C  G
come on baby, don't say maybe 
        Am                 C             G    C
I gotta know if your sweet love is gonna save me, 
C       G       C       G       C       G       
ooh,ooh,ooh,ooh,ooh,ooh,ooh,ooh,ooh,ooh,ooh,ooh
                           Em C G
Oh well you know we got it easy 2x
                  Am  C  Em
We oughta take it easy,  yeah
</pre>
</div>

<p><a class="accordion-toggle" href="#content-8y"><li>Somewhere In Time - John Barry | 85 bpm</a></li></p>
<div class="accordion" id="content-8y"> 
<pre>        
[C#] Somewhere in [A#m] time
We met on [F#] timeless hills
[D#m] And in the [G#] evening mist we [G#7] kissed
And time stood [C#] still
Before the [F#] dawn, [D#m] we found for-[A#m] ever
Moments are [F7] timeless when I [C7] feel your [G#7] caress

[C#] Love never [A#m] goes
Once it has [F#] touched your heart
[D#m] Just like the [G#] strength of wine that's [G#7] left
As two lips [C#] part
A taste of [F#] love [D#m] will linger [A#m] after
And I [F7] know the meaning [C7] of all that I [G#7] see

You'll always [A#m] be inside of [F#] me
And I [F7] know when love is [C7] true
It's always with [G#7] you

[C#] Somewhere in [A#m] time
[F#] I came to realize
[G#7] Love never [C#] goes [B] [C#]
</pre>
</div>
<p><a class="accordion-toggle" href="#content-8u"><li>Just The Two Of Us - Grover Washington | 96 bpm</a></li></p>
<div class="accordion" id="content-8u"> 
<pre>     
Intro

C B7 Em G - C B7 Em
Verse

[C]I see the crys[B7]tal rain drops f[Em]all,  
and the b[G]eauty of it a[C]ll 
Is when t[B7]he sun comes s[Em]hining through
[C]To make those [B7]rainbows in my mi[Em]nd, 
When I think [G]of you sometime,[C] 
And I want to [B7]spend some time with [Em]you. 


Chorus

Just the [C]two of us,[B7]    we can make[Em] it if we t[G7]ry, 
Just the [C]two of us,[B7]    just the t[Em]wo of us. 
Just the [C]two of us,[B7]  building cas[Em]tles in the sk[G7]y,
Just the [C]two of us,[B7]   you and[Em] I. 


Verse 2

[C]We look for lo[B7]ve, no time for [Em]tears,
wasted wat[G]er's all that[C] is, 
And it don[B7]'t make no flo[Em]wers grow.
[C]Good things mi[B7]ght come to those[Em] who wait, 
But not for t[G]hose who wait to[C]o late
We've got to [B7]go for all we know.  [Em]   

Chorus
Just the [C]two of us,[B7]    we can make[Em] it if we t[G7]ry, 
Just the [C]two of us,[B7]    just the t[Em]wo of us. 
Just the [C]two of us,[B7]  building cas[Em]tles in the sk[G7]y,
Just the [C]two of us,[B7]   you and[Em] I. 

Bridge

[C]   [B]   [Bb]    [A]   [Ab]   [G]  [(hits)]       [C]  [C]  [F] 
[C]   [B]   [Bb]    [A]   [Ab]   [G]  [(hits)]       [C]  [C]  [F] 

Interlude/Intro

[C]   [B]   [Em]    [G]   
[C]   [B]   [Em]  

Verse 3

[C]I hear the cry[B7]stal raindrops f[Em]all on th[G]e window down[C] the hall
And it bec[B7]omes the morni[Em]ng dew.
[C]And Darling, w[B7]hen the morning c[Em]omes 
And I see the[G] morning sun,   [C] 
I want to be [B7]the one with you.    [Em]   


Chorus

Just the [C]two of us,[B7]    we can make[Em] it if we t[G7]ry, 
Just the [C]two of us,[B7]    just the t[Em]wo of us. 
Just the [C]two of us,[B7]  building cas[Em]tles in the sk[G7]y,
Just the [C]two of us,[B7]   you and[Em] I. 
</pre>
</div>
<p><a class="accordion-toggle" href="#content-8z"><li>Till There Was You - Beatles | 122 bpm</a></li></p>
<div class="accordion" id="content-8z"> 
<pre>           
[Intro]

e|-1-----|-----------|-------|------|
B|---1---|-----------|-3-----|------|
G|-----2-|-----------|---3---|------|
D|-------|-4---------|-----5-|------|
A|-------|-----------|-------|-3----|
E|-------|-----------|-------|------|
[F]        [F#dim7]             [Gm7]        [C7+9]    

[Verse]

There were b[F]ells on a h[F#dim7]ill       
But I n[Gm7]ever heard them r[Bbm]inging
No I n[F]ever h[Am]eard th[G#m]em at [Gm7]all [C7+9]    
Till there was yo[F]u [Gm7]    [C7+9]    

There were b[F]irds in the sk[F#dim7]y         
But I n[Gm7]ever saw them w[Bbm]inging
No I n[F]ever s[Am]aw th[G#m]em at [Gm7]all [C7+9]    
Till there was yo[F]u [F#dim7]          


[Chorus]

Then there was m[Bb]usic [Bbm]    and wonderful r[F]oses
They [D]  tell me in sw[Gm7]eet [Gmmaj7]    
fragrant mea[G7]dows of [C7]dawn [C7+5]and you


[Verse]

There was l[F]ove all ar[F#dim7]ound      
But I n[Gm7]ever heard it s[Bbm]inging
No I n[F]ever h[Am]eard [G#m]it at [Gm7]all [C7+9]    
Till there was yo[F]u [Gm7]    [C7+9]    


[Solo]

e|-----|---1-----|---------|-----------|---------|---3-5-3-|-5-3-5-3-|
B|-----|-1---3-1-|---------|-----1-4---|-3-1-----|---3-3-3-|-3-3-3-3-|
G|-2-3-|---------|-3-2-0---|---2-------|-----3-2-|-3-3-3-3-|-3-3-3-3-|
D|-----|---------|-------3-|-4---------|---------|---------|---------|
A|-----|---------|---------|-----------|---------|---------|---------|
E|-----|---------|---------|-----------|---------|---------|---------|
[F]                    [F#dim7]                       [Gm]  
e|---6-8-6-|-8-6-8-6-|----10-|-8--7---|-6--|-5----|-1-1---|-----|
B|---6-6-6-|-6-6-6-6-|----10-|-5--4---|-3--|-5----|-----1-|-----|
G|-6-6-6-6-|-6-6-6-6-|----10-|-5--4---|-3--|-3----|-------|-2---|
D|---------|---------|-10-- -|-7--6---|-5--|-5----|-------|-----|
A|---------|---------|-------|--------|----|-3----|-------|---0-|
E|---------|---------|-------|--------|----|-3----|-------|-----|
[Bbm]                    [F]        [Am]   [G#m]      [Gm7]     [C7+9]      [F] 
e|-----------|-----1-|
B|-----------|---1---|
G|-----------|-2-----|
D|---1-4-----|-------|
A|-3---------|-------|
E|-----------|-------|
B7+9 Then there was


[Chorus]

m[Bb]usic [Bbm]    and wonderful r[F]oses
They [D]  tell me in sw[Gm7]eet [Gmmaj7]    
fragrant mea[G7]dows of [C7]dawn [C7+5]and you


[Verse]

There was l[F]ove all ar[F#dim7]ound      
But I n[Gm7]ever heard it s[Bbm]inging
No I n[F]ever [Am]heard[G#m] it at [Gm7]all [C7+9]    
Till there was [F]you


[Outro]

[C7]Tiii[B7]iii[C7]ll   there was [F]you [C#]    [F]      [Fmaj7]     
</pre>
</div>
    </main>
  );
}

export default App;
