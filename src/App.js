import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {  
  return (
    <main>

<body>
<!-- BACK TO TOP FUNCTINALITY - start-->
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
<p><a class="accordion-toggle" href="#content-8a"><li>Wasted On The Way - CSN | tempo - 154 BPM</a></li></p>
<div class="accordion" id="content-8a"> 
<pre> 
D  Em D  A \ D   D  A7 \ D

D                     Bm
Look around me, I can see my life before me
G                A              D   Em D
Running rings around the way it used to be
D                 Bm
I am older now, I have more than what I wanted
G               A              G      D   Em D
But I wish that I had started long before I did

G       A               D              Bm
And there's so much time to make up everywhere you turn
G            A             F#m  D7
Time we have wasted on the way
G       A            D              Bm
So much water moving underneath the bridge
G              A     G   D
Let the water come and carry us away

D                                Bm
Oh, when you were young, did you question all the answers
G            A               G       D
Did you envy all the dancers who had all the nerve
D                  Bm
Look around you now, you must go for what you wanted
G                  A                G      D
Look at all my friends who did and got what they deserved

G       A               D              Bm
And there's so much time to make up everywhere you turn
G            A             F#m  D7
Time we have wasted on the way
G       A            D              Bm
So much water moving underneath the bridge
G              A     G   D7
Let the water come and carry us away

G       A               D              Bm
So much love to make up everywhere you turn
G            A             F#m  D7
Love we have wasted on the way
G       A            D              Bm
So much water moving underneath the bridge
G              A     G   D
Let the water come and carry us away
G              A         G     D
Let the water come and carry us away
</pre>
</div>
<p><a class="accordion-toggle" href="#content-7a"><li>I'll Play For You - Seaks & Croft | 91 BPM</a></li></p>
<div class="accordion" id="content-7a"> 
<pre> 
[Intro]
G  F  E  D   G  F  E  D   G  F  E

D    C    G        D    C    G
I'll play for you; I'll play for you
Am     C     G    C   G
I'll play   for   you


[Verse 1]
G
Tonight while the lights are shinin'
C                      G         Cadd9
And the microphone is on, I'll play for you
G
So many will be the blessings
C                            G         Cadd9
And so short will be the time, I'll stay with you
G        C                       G
But I'll play for you, I love you, yes, I do
G                 C              G           C
You can say that I'm your friend; You can see my life begin and end
G          C           G
I'll al--ways play for you


[Chorus]
G                       Bm
Hear the band, hear the band
G                                C
Won’t you let the music take you, hear the band
G              C
Let this night go on forever,
G                             D
Don’t you ever stop the music, Let your spirit set you free now
G             Bm
Hear the band, hear the band
G                                      C
You can sing and stomp your feet and clap your hands
G                  C
These few moments, shared together
A#   C   G
And I’ll play for you


[Verse 2]
G
I have practiced many years
C                              G        Cadd9
And I have come a long, long way, Just to play for you
G                          C                             G      Cadd9
My life is but a song, I have written in many ways, Just to say to you
G   C                  G
To say, I love you, yes I do
G               C            G          C
And I’d like for you to be, whatever you would like to be
G              C                  G
And you’ll al--ways be special to me


[Chorus]
G                       Bm
Hear the band, hear the band
G                                C
Won’t you let the music take you, hear the band
G              C
Let this night go on forever,
G                             D
Don’t you ever stop the music, Let your spirit set you free now
G             Bm
Hear the band, hear the band
G                                      C
You can sing and stomp your feet and clap your hands
G                  C
These few moments, shared together
A#   C   G
And I’ll play for you
</pre>
</div>
<p><a class="accordion-toggle" href="#content-6a"><li>Just A Song Before I Go - CSN | 108 BPM</a></li></p>
<div class="accordion" id="content-6a"> 
<pre> 
Em            Bm
Just a song before I go,
C              Am
to whom it may concern.
Em                   Bm
Travelling twice the speed of sound,
C           Am
it's easy to get burned.

G                   F
When the shows were over,
Am              Bm
we had to get back home
G              F
And when we opened up the door,
Am
I had to be alone.

Em                Bm
She helped me with my suitcase,
C                Am
she stands before my eyes
Em                Bm
Driving me to the airport,
C               Am
and to the friendly skies.

G               F
Going through security,
Am              Bm
I held her for so long.
G                 F
She finally looked at me in love,
Am
and she was gone.

Em Bm C Am  2x

Em            Bm
Just a song before I go,
C            Am
a lesson to be learned.
Em                   Bm
Travelling twice the speed of sound,
C           Em
it's easy to get burned.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-5a"><li>Love Of My Life - Queen | 79 BPM</a></li></p>
<div class="accordion" id="content-5a"> 
<pre>
[Intro]
D   Bm   Em   A
D   Bm   G  D  E

[Verse 1]
A                        F#m
Love of my life - you've hurt me,
Bm                  E         E7
You've broken my heart and now you leave me.
A          A7             D
Love of my life can't you see?
Bm             F#m
Bring it back, bring it back,
G        D              G     D   Bm    Em    A                D
Don't take it away from me, because you don't know, what it means to me.

[Verse 2]
A                     F#m
Love of my life don't leave me,
Bm                 E     E7
You've taken my love, and now desert me,
A          A7             D
Love of my life can't you see,
Bm             F#m
Bring it back, bring it back,
G        D             G     D   Bm    Em     A                D
Don't take it away from me because you don't know - what it means to me.

[Verse 3]
Bm                       F#m
You will remember - When this is blown over
G                       D      F#
And everything's all by the way -
Bm                F#m                     B        Cdim  B
When I grow older I will be there at your side to remind you
Em               A            D
How I still love you - still love you.

[Verse 4]
Bm           F#m
Hurry back - hurry back,
G             D
Please bring it back home to me,
G     D   Bm    Em   A                D
because you don't know what it means to me - 

[Outro]
Bm
Love of my life
F#m                 Em  Gm  D
Love of my life ...
</pre>
</div>
<p><a class="accordion-toggle" href="#content-4a"><li>Money For Nothing - Dire Straits | 134 BPM</a></li></p>
<div class="accordion" id="content-4a"> 
<pre>
[Intro] Gm7 / C / Gm7 / Bb C / Gm7 / - / Gm7 / F Gm7

[Verse 1]
Gm7                                                  C
Now look at them yo-yo's that's the way you do it
Gm7                           Bb  C
You play the guitar on the M.T.V.
Gm7
That ain't workin' that's the way you do it
        F          Gm7
Money for nothin' and chicks for free
Gm7                                             C
Now that ain't workin' that's the way you do it
Gm7                   Bb         C
Lemme tell ya them guys ain't dumb
Gm7
Maybe get a blister on your little finger
F               Gm7
Maybe get a blister on your thumb

[Chorus]
Eb                  Bb
We gotta install microwave ovens
Eb                  F
Custom kitchen deliveries
Gm7
We gotta move these refrigerators
C                      D          E
We gotta move these colour TV's

[Verse 2]
Gm7                                              C
See the little faggot with the earring and the makeup
Gm7                 Bb      C
Yeah buddy that's his own hair
Gm7
That little faggot got his own jet airplane
        F           Gm7
That little faggot he's a millionaire

[Chorus]
Eb                  Bb
We gotta install microwave ovens
Eb                  F
Custom kitchen deliveries
Gm7
We gotta move these refrigerators
C                      D          E
We gotta move these colour TV's

[Instrumental] Gm7 / C / Gm7 / Bb C / Gm7 / - / Gm7 / F Gm7

[Chorus]
Eb                  Bb
We gotta install microwave ovens
Eb                  F
Custom kitchen deliveries
Gm7
We gotta move these refrigerators
C                      D          E
We gotta move these colour TV's

[Verse 3]
Gm7                                     C
I shouldda learned to play the guitar
Gm7                      Bb        C
I shouldda learned to play them drums
Gm7
Look at that mama, she's got it stickin' in the camera
F         C
Man we could have some fun
Gm7                                                 C
And he's up there, what's that?  Hawaiian noises?
Gm7                              Bb     C
Bangin' on the bongoes like a chimpanzee
Gm7
That ain't workin' that's the way you do it
        F              Gm7
Get your money for nothin' and chicks for free

[Chorus]
Eb                  Bb
We gotta install microwave ovens
Eb                  F
Custom kitchen deliveries
Gm7
We gotta move these refrigerators
C                      D          E
We gotta move these colour TV's

[Instrumental] Gm7 / C / Gm7 / Bb C / Gm7 / - / Gm7 / F Gm7

[Bridge]
Gm7                                             C
Now that ain't workin' that's the way you do it
Gm7                           Bb  C
You play the guitar on the M.T.V.
Gm7
That ain't workin' that's the way you do it
        F          Gm7
Money for nothin' and your chicks for free
Gm7                 C    Gm7             Bb   C
Money for nothin'     chicks for free 
Gm7                                      F    Gm7
Money for nothin'     chicks for free  
</pre>
</div>
<p><a class="accordion-toggle" href="#content-3a"><li>Survival - America | 127 BPM</a></li></p>
<div class="accordion" id="content-3a"> 
<pre>
[Intro]
Am  Em  Am  Em  Fmaj7  Em  Fmaj7  Em 

[Verse]

Em         Am       Em           Am

I'll survive you,   I will survive you

Em            F           Em       F                 Em

Well, it's too late, I know, to change the way we go

Em           Am     Em           Am

From this day on    I want to stay on

G          F            Em

Now that I've started learning

F             Em

And the tides started turning

F              Esus4  Em

Well, it's here I want to stay 

[Chorus]

Dm7              G7     Em          Am

I'll let the moon announce my arrival

Dm7          G7       Em

To every eye that cares to see

F              G7     Em        Am

Just working on the art of survival

F                         Em

Where do we go from here, where do we go from here 

[Verse]

Em      Am        Em          Am

I'm alive here,   I can survive dear

G            F             Em

Though the weather might change

F           Em

From the wind to the rain

F                 Esus4  Em

Well, my heart remains the same 

[Chorus]

Dm7              G7     Em          Am

I'll let the moon announce my arrival

Dm7          G7       Em

To every eye that cares to see

F              G7     Em        Am

Just working on the art of survival

F                         Em

Where do we go from here, where do we go from here 

[Bridge]

C

Looked out on a sea of trouble 

And I tried to stall for awhile

Am                     D

It's so hard to answer every question

Am                   Fmaj7

And it's hard to protect your heart anymore 

[Interlude] Lead Break

Em  Am  Em  Am  G  F  Em  F  Em 

[Chorus] X3

Dm7              G7     Em          Am

I'll let the moon announce my arrival (I am alive)

Dm7          G7       Em

To every eye that cares to see

F              G7     Em        Am

Just working on the art of survival (but I wonder)

Fmaj7               Esus4  Em

Where do we go from here
</pre>
</div>
<p><a class="accordion-toggle" href="#content-2d"><li>Flor D Luna Moonflower - Santana | tempo - 124 BPM</a></li></p>
<div class="accordion" id="content-2d">       
<pre>
# note: DmM7= Dm(maj7)

[Verse]
N.C.
|--------|
Dm9               A7sus4   A7       Dm DmM7  Dm7
|--------|--------|--------|--------|--------|--------|
Gm9      Gm6      Dm7      A7       Dm       Dm N.C.
|--------|--------|--------|--------|--------|--------|

Dm9               A7sus4   A7       Dm DmM7  Dm7
|--------|--------|--------|--------|--------|--------|
Gm9      Gm6      Dm7      A7       Dm       Dm N.C.
|--------|--------|--------|--------|--------|--------|

[Chorus]
Gm7      C7b5 C9  Fmaj9    Fmaj7    A7sus4   A7
|--------|--------|--------|--------|--------|--------|
Dm7               Gm7      C7b5 C9  Fmaj9    Fmaj7
|--------|--------|--------|--------|--------|--------|
A7sus4   A7       Dm       Dm N.C.
|--------|--------|--------|--------|

[Verse]
Dm9               A7sus4   A7       Dm DmM7  Dm7
|--------|--------|--------|--------|--------|--------|
Gm9      Gm6      Dm7      A7
|--------|--------|--------|--------|

[Bridge]
Dm       Em7b5 A7 Dm       Em7b5 A7
|--------|--------|--------|--------|

[Solo]
Dm       Em7b5 A7 Dm       Em7b5 A7
|--------|--------|--------|--------|  x 8

Dm  A7   Dm  A7   Dm  A7 Dm7 N.C.
|--------|--------|--------|--------|

[Chorus]
Gm7      C7b5 C9  Fmaj9    Fmaj7    A7sus4   A7
|--------|--------|--------|--------|--------|--------|
Dm7               Gm7      C7b5 C9  Fmaj9    Fmaj7
|--------|--------|--------|--------|--------|--------|
A7sus4   A7       Dm       Dm N.C.
|--------|--------|--------|--------|

[Verse]
Dm9               A7sus4   A7       Dm DmM7  Dm7
|--------|--------|--------|--------|--------|--------|
Gm9      Gm6      Dm7      A7
|--------|--------|--------|--------|

[Outro]
Dm       Em7b5 A7 Dm       Em7b5 A7
|--------|--------|--------|--------| repeat ad libitum (fading)
</pre>
</div>
<p><a class="accordion-toggle" href="#content-2c"><li>Our House - Crosby, Still and Nash | 140 BPM</a></li></p>
<div class="accordion" id="content-2c">       
<pre>
A              Amaj7
I'll light the fire
F#m           A              D
You place the flowers in the vase
A        D   D  E
That you bought today

A              Amaj7
Staring at the fire
F#m       A
For hours and hours
D      A      D         E
While I listen to you play your love songs
D         E        A Amaj7
All night long for me
F#m      A D   F
Only for me

A          Amaj7
Come to me now
F#m                A
And rest your head for just five minutes
D    A        D  E
Everything is done
A           Amaj7
Such a cozy room
F#m           A
The windows are illuminated
D      A       D        E
By the evening sunshine through them
D     E        A  Amaj7
Fiery gems for you
F#m      A D  F
Only for you

A   Amaj7       F#m                   A
Our house, is a very, very, very fine house
D               A
With two cats in the yard
D             A
Life used to be so hard
D             A              D      Bm  D
Now everything is easy 'cause of you    and I

A  Amaj7  F#m   A  D  A  D F 2x
La la la....

A   Amaj7       F#m                   A
Our house, is a very, very, very fine house
D               A
With two cats in the yard
D             A
Life used to be so hard
D             A              D   Bm  D
Now everything is easy 'cause of you

A              Amaj7
I'll light the fire
F#m           A              D
While you place the flowers in the vase
F        A
That you bought today
</pre>
</div>
<p><a class="accordion-toggle" href="#content-2b"><li>Matud Nila - Visayan Song | 132 BPM</a></li></p>
<div class="accordion" id="content-2b">       
<pre>
Am Dm
Matud nila ako dili angay
E7 E+ Am-E7
Nga magmanggad sa imong gugma
Am Em
Matud nila ikaw dili malipay
B7
Kay wa akoy bahandi
E
Nga kanimo igasa
Am A7 Dm
Gugmang putli mao day pasalig
G7 C - Bb-A7
Maoy bahanding labaw sa bulawan
Dm E7 A7
Matud nila kaanugon lamang
F E7 A-E7
Sa imong gugma ug parayeg

Chorus:
A G-F# Bm
Dili malubad kining pagbati
E7 A - E7
Bisan sa unsa nga katarungan
A F# Bm
Kay unsa pay bili ning kinabuhi
E7 E+ A - E7
Kon sa gugma mo hinikawan
A G-F# Bm
Ingna ko nga dili ka motuo
C#7 F#m - A7
Sa mga pagtamay kong naangkon
D Dm A - Em - F#
Ingna ko nga dili mo kawangon
B7
Damgo ko'g pagsalig
E7 F - A
Sa gugma mo . . . . . .
</pre>
</div>
<p><a class="accordion-toggle" href="#content-2a"><li>Photographs And Memories - Jim Croce | 123 BPM</a></li></p>
<div class="accordion" id="content-2a">       
<pre>
[Verse 1]

Gmaj7             Cmaj7   Gmaj7                 Cmaj7
Photographs and memories, Christmas cards you sent to me
Am         Bm       Em         Am          D7
All that I have are these to remember you
Gmaj7           Cmaj7        Gmaj7         Cmaj7
Memories that come at night  take me to another time
Am        Bm      Em          Am              D7
Back to a happier day, when I called you mine


[Chorus]

Gmaj7            Cmaj7          Gmaj7            Cmaj7
But we sure had a good time when we started way back when
Gmaj7              Cmaj7             Bm               F#m  D7
Morning walks and bedroom talks, oh, how I loved you then


[Verse 2]

Gmaj7              Cmaj7    Gmaj7                Cmaj7
Summer skies and lullabies, nights we couldn't say goodbye,
Am         Bm             Em          Am             D7
And of all of the things that we knew, not a dream survived


[Verse 3]

Gmaj7             Cmaj7   Gmaj7              Cmaj7
Photographs and memories, all the love you gave to me,
Am         Bm            Em                    Am          D7
Somehow it just can't be true, that's all I've left of you


[Chorus]

Gmaj7            Cmaj7          Gmaj7            Cmaj7
But we sure had a good time when we started way back when
Gmaj7              Cmaj7             Bm               F#m
Morning walks and bedroom talks, oh, how I loved you then
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1h"><li>Ill Have To Say I Love You In A Song - Jim Croce | tempo - 134 BPM</a></li></p>
<div class="accordion" id="content-1h">       
<pre>
[INTRO] Amaj7  C#m Bm Dm E7 Dm E7


[Verse 1]

Amaj7             C#m     Bm            E
Well, I know it's kind of late, I hope I didn't wake you.
Amaj7                   C#m     Bm              E
But what I got to say can't wait, I knew you'd understand.


[Chorus]

D            G#7                    C#7                 F#m
Every time I tried to tell you, the words just came out wrong.
D        A             E              D    A
So, I'll have to say I love you, in a song.


[Verse 2]

Amaj7                     C#m          Bm             E
Yeah, I know it's kind of strange, but every time I'm near you..
Amaj7                C#m    Bm              E
I just run out of things to say..I knew you'd understand.


[Chorus]

D                  G#7                    C#7                 F#m
Cause every time I tried to tell you, the words just came out wrong.
D        A             E              D    A
So, I'll have to say I love you, in a song.


[Interlude]


[Chorus]

D              G#7                     C#7                 F#m
Every time the time was right, all the words just came out wrong.
D        Amaj7         E              D    A
So, I'll have to say I love you, in a song.


[Verse 3]

Amaj7             C#m     Bm            E
Yeah, I know it's kind of late, I hope I didn't wake you.
Amaj7                                C#m    Bm              E
But there's something that I just got to say, I knew you'd understand.


[Chorus]

D                  G#7                    C#7                 F#m
Cause every time I tried to tell you, the words just came out wrong.
D        Amaj7         E              D    A
So, I'll have to say I love you, in a song.


[Outro]

Amaj7 C#m Bm Dm E7 Dm E7 Amaj7 (Fade.)
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1g"><li>I Just Dont Want To Be Lonely - The Main Ingredient | tempo - 152 BPM</a></li></p>
<div class="accordion" id="content-1g">       
<pre>
F      Dm     Gm    C   4x

F       Dm            Gm    C                         F
I don't mind when you say          that you're going away
Dm                  Gm      C
I Just don't wanna be lonely
F           Dm         Gm                     C
And I don't care if we share   only moments a day
Dm                  Gm      C
I Just don't wanna be lonely

F         C
I'd rather be loved and needed
Dm             Gm     C                    F
Depended on to give a love I can't give
Bb                     Am
When you're gone,      when you're gone
Dm                            Gm      C
I just don't want to be lonely
F       Dm     Gm    C
I'd just rather be loved
F       Dm     Gm    C
I'd just rather be loved

I don't mind when the time sets the sun to the moon
I just don't wanna be lonely
Let the stairs find you there at the end of the room
I just don't wanna be lonely

I'd rather be loved and needed
Depended on to give a love I can't give
When you're gone, when you're gone
I just don't want to be lonely
I'd just rather be loved
I'd just rather be loved

I'd rather be loved and needed
Depended on to give a love I can't give
When you're gone, when you're gone
I just don't want to be lonely
I'd just rather be loved
I'd just rather be loved
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1f"><li>Nightbirds - Kalapana | 117 BPM</a></li></p>
<div class="accordion" id="content-1f">       
<pre>
C                  Dm7         G7             F       C
Fly on through the night wind, take a star to her for me.
Dm7       G7                C  G7
Please, whisper I love her, tell her wait for me.
C                Dm7       G7             F           C
Here it seems so cold now, how I miss her arms around me.
Dm7   G7                C
Soar, nightbird of love, make her wait for me.

[Chorus] x2
C7             F                    CMaj7       F      G7
Cause you have wings you know, I'll let you go, almost every
C    C7     F              CMaj7             D7
night.  But loneliness can dull the shine of even the bright
G7          F     Fm       C C7      F     Fm          C   G7
moonlight.  Nightbird fly, fly on.  Nightbird, sing her my song.
C              Dm7    G7                F         C
Oh, before you leave, take this band of gold with you.  And
Dm7       G7            C
if you can find her, tell her I am true.

F    Fm       C  C7     F    Fm       C
[End]  Nightbird fly, fly on.  Nightbird fly fly on.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1e"><li>Never Be Lonely - America | 148 BPM</a></li></p>
<div class="accordion" id="content-1e">       
<pre>
Am --
(Intro)

Am          
Got you by my side
D7
I'll never be lonely
Am
Got you by my side
D7
I'll never be afraid
Fmaj7     Em
Never be lonely anymore
Fmaj7         Em
Turn away the fools from my door
Fmaj7           Esus4
Always wanna be your one and only
E7       Am     D7  Am  D7
Never be lonely

Am
Spent a lot of time
D7
Waitin' to find you
Am
Spent a lot of time
D7
All on my own
Fmaj7              Em
Could've gone a thousand different ways
Fmaj7          Em
Watching my nights turn to days
Fmaj7           Esus4
Always wanna be your one and only
E7       Am     D7  Am  D7
Never be lonely

C           Em               Fmaj7
Here in the middle of now or never
C         Em              Fmaj7
Finally found where I belong
Dmaj7            F#m7            Gmaj7
I could go on like this forever
F#m7  Gmaj7            F#m7  Gmaj9
Looking at you,        looking at you

Am --

Am
Wasn't I the one
D7
Love never came to
Am
Wasn't I the one
D7
So misunderstood
Fmaj7        Em
All because my heart wasn't sure
Fmaj7            Em
Never felt a love like this before
Fmaj7           Esus4
Always wanna be your one and only
E7       Am     D7  Am  D7
Never be lonely

C           Em               Fmaj7
Here in the middle of now or never
C         Em              Fmaj7
Finally found where I belong
Dmaj7            F#m7            Gmaj7
I could go on like this forever
F#m7  Gmaj7            F#m7  Gmaj9
Looking at you,        looking at you

Am --

Am
Got me by your side
D7
Never be lonely
Am
Got me by your side
D7
Never be afraid
Fmaj7            Em
And I will not let you down
Fmaj7            Em
Keeping both feet on the ground
Fmaj7           Esus4
Always wanna be your one and only
E7       Am     D7  Am  D7
Never be lonely

Am     D7  Am  D7
Never be lonely
Am     D7  Am  D7
Never be lonely
Am     D7  Am  D7
Never be lonely
Am     D7  Am  D7
Never be lonely
Am     D7  Am  D7
Never be lonely
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1d"><li>Jody - America | 126 BPM</a></li></p>
<div class="accordion" id="content-1d">       
<pre>
A  F#m7  D  E
(Intro)

A                     E
Just to think I had her in my hands
F#m7
To think we made our plans
B                     D      E
Somehow it feels just like a dream

A                   E
For I played it so darn cool
F#m7
Is there a bigger fool
B               D     E
To say I wanted to be free
C#m7  F#m       D                 E    D  E
'Cause now I know just what she meant to me

A                             F#m
Jody, even the wind says your name, girl
        Dmaj7              C#m7
When I think of you I'm aflame, girl, every time
D                           C#m      D
Jody, girl I've tried but I can't forget
A
The years when we lived together
F#m7
I thought it would be forever
D     E           F#m    Dmaj7  E
Jody, I'm beggin' now

A                    E
Look around but there's no way out
F#m7
What's it all about
B                      D        E
And how that name goes round my head
C#m7    F#m         D              E   (transpose) E  F#
I still see her face as she laid upon this bed

B                             G#m
Jody, even the wind says your name, girl
        Emaj7              D#m7
When I think of you I'm aflame, girl, every time
E                           D#m      E
Jody, girl I've tried but I can't forget
B
The years when we lived together
G#m7
I thought it would be forever
E     F#          D#m7
Jody, I'm beggin' now

        E
Just say the word, I'll run to you
C#m7                B
I'll be the man you want me to
G#m7               C#m        (transpose) E  F#  F#  G#
How I'd miss you I never knew

C#                            A#m
Jody, even the wind says your name, girl
        F#maj7             Fm7
When I think of you I'm aflame, girl, every time
F#                          Fm       F#
Jody, girl I've tried but I can't forget
C#
The years when we lived together
A#m7
I thought it would be forever
F#    G#          C#
Jody, I'm beggin' now

        A#m
Even the wind says your name, girl
        F#maj7      G#
When I think of you I'm aflame, girl
C#                            A#m
Jody, even the wind says your name, girl
        F#maj7      G#
When I think of you I'm aflame, girl ...
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1c"><li>I Still Believe In Us Together - Hiyas | 150 BPM</a></li></p>
<div class="accordion" id="content-1c">      
<pre>
Intro: C-Dm-G-F-C-A7sus-A7-

Dm                G
Lookin' back through all those years
C                       A7
Babe, we've gone through everything there is
Dm                     G
We never thought that we'd come this far
C                         A7
But thank God above, we never walked out the door

Dm                 G         G/F
Yes there were times we tried to give up
Em                 Am
But our love kept us from drifting apart
Dm
Our faith in each other 
D7                       G
Was all that we needed to survive

Chorus
(Dm-G7) C           Em             F  (F,Em,)
Baby, I still believe in us together
Dm           G              C
It's gonna be that way, come what may
Dm-G7  C           Em             F  (F,Em,)
Baby, I still believe in us together
Dm              G  Em        A7
I know that our love for each other
Dm           G         C
Will keep us stronger everyday

Interlude: C-Dm-G-F-C-A7sus-A7

Dm                         G
All of our friends, they tell us the same
C                        A7
With love alone, we'll never make it on our own
Dm                    G
But look at us, our love is all we have
C                           A7
We're going strong, yes, we've proven them wrong

Dm                       G           G/F
We showed them all, with love we can walk tall
Em             Am
Just as long as we keep on believin'
Dm
There won't be any leavin'
D7
Yes, we'll stay that way
G
Love will show us the way

(Repeat Chorus except last word)

Bb-F-G-A-Em-A7-
... everyday

(Repeat Chorus moving chords 1 step <C> higher,
except last word)

D-Em-A-
... everyday
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1b"><li>Lotta Love - Neil Young | 106  BPM</a></li></p>
<div class="accordion" id="content-1b">    
<pre>
[Intro]
A            G              Gmaj7 F#m   Gmaj7 F#m
la-la la-la la la la-la-la oooh ooh   oooh ooh

[Chorus]
Gmaj7        F#m
It's gonna take a lotta love
Gmaj7           F#m
To change the way things are
Gmaj7       F#m
It's gonna take a lotta love
Gmaj7              F#m
Or we won't get too far

[Verse 1]
Gmaj7         F#m
So if you look in my direction
Em                F#m  G A
And we don't see eye to eye
Gmaj7              F#m
My heart needs protection
D A G G6   Gmaj7  F#m
And so do I... 

[Chorus]
It's gonna take a lotta love
To get us through the night
It's gonna take a lotta love
To make things work out right

[Verse 2]
So if you are out there waitin'
I hope you show up soon
'Cause my head needs relating
Not solitude

[Bridge]
D            Bm            G            Em
Got a lotta love oh-yeah got a lotta love
A            G              Gmaj7 F#m   Gmaj7 F#m
la-la la-la la la la-la-la oooh ooh   oooh ooh

[Chorus]
Gmaj7        F#m
It's gonna take a lotta love
Gmaj7           F#m
To change the way things are
Gmaj7       F#m
It's gonna take a lotta love
Gmaj7              F#m
Or we won't get too far
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1a"><li>Crazy Love - POCO | 82 BPM</a></li></p>
<div class="accordion" id="content-1a">    
<pre>
Fmaj7  C
Fmaj7
Tonight I'm gonna break away
G        Fmaj7    C
Just you wait and see.
Fmaj7
I'll never be imprisoned by
G     Fmaj7 C
a faded memory.


[Verse 2]

Fmaj7
Just when I think I'm over her,
G      Fmaj7      C
this broken heart will mend.
Fmaj7
I hear her name and I have to cry,
G          Fmaj7  C
the tears come down again.


[Chorus]

Fmaj7
It happens all the time.
G          C
This crazy love of mine,
Fmaj7
wraps around my heart
G        C
refusing to unwind.
Fmaj7 G   Fmaj7  C
Ooo   Ooo Crazy Love
Fmaj7  G   Fmaj7  C
Ahh    ha


[Verse 3]

Fmaj7
Count the stars in a summer sky,
G    Fmaj7     C
that fall without a sound.
Fmaj7
And then pretend that you can't hear
G         Fmaj7  C
these teardrops coming down.


[Chorus]

Fmaj7
It happens all the time.
G          C
This crazy love of mine,
Fmaj7
wraps around my heart
G        C
refusing to unwind.
Fmaj7 G   Fmaj7  C
Ooo   Ooo Crazy Love
Fmaj7  G   Fmaj7  C
Ahh    ha


[Verse 4]

Fmaj7
Tonight I'm gonna break away
G        Fmaj7    C
Just you wait and see
Fmaj7
I'll never be imprisoned by
G     Fmaj7  C
a faded memory.


[Chorus]

Fmaj7
It happens all the time.
G          C
This crazy love of mine,
Fmaj7
wraps around my heart
G        C
refusing to unwind.
Fmaj7 G   Fmaj7  C
Ooo   Ooo Crazy Love
Fmaj7  G   Fmaj7  C
Ahh    ha

Fmaj7
Tonight I'm gonna break away.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-1"><li>Hotel California - Eagles | 120 BPM</a></li></p>
<div class="accordion" id="content-1">			
<pre>
Intro: 4/4 
||:  Bm  |  F#  |  A  |  E  |  G  |  D  |  Em  |  F#  :|| x2

Bm                            F#
1. On a dark de-sert high-way___ Cool wind in my hair
A                          E
Warm smell of col-i-tas___ Ris-ing up through the air
G                             D
Up a-head in the dis-tance___ I saw a shim-mer-ing light
Em                                           F#
My head grew hea-vy and my sight grew dim___ I had to stop for the night


Bm                                 F#
2. There she stood in the door-way___ I heard the mis-sion bell
A                                                  E
And I was thin-king to my-self___ This could be Hea-ven or this could be  Hell
G                            D
Then she lit up a can-dle___ And she showed me the way
Em                                        F#
There were voi-ces down the cor-ri-dor___ I thought I heard them say

G                             D
Chorus: Welcome to the Ho-tel Cal-i-for-nia
F#                                               Bm
Such a love-ly place (Such  a  love-ly place)___ Such a love-ly face
G                                   D
Plen-ty of room at the Ho-tel Cal-i-for-nia
Em                                         F#
Any time of year (Any time of year)___ You can find it here

Bm                                  F#
3. Her mind is ‘Tif-fa-ny twist-ed’___ She got the Mer-ce-des bends___ (ooh)
A                                        E
She got a lot of pret-ty pret-ty boys___ She calls friends
G                                       D
How they dance in the court-yard___ Sweet sum-mer sweat
Em                          F#
Some dance to re-mem-ber___ Some dance to for-get

Bm                              F#
4. So I called up the Cap-tain___ “Please bring me my wine"
A                                            E
He said, "We have-n't had that spi-rit here___ Since  nine-teen six-ty nine"
G                                            D
And still those voi-ces are cal-ling from far a-way
Em                                         F#
Wake you up in the mid-dle of the night___ Just to hear them say-ay

G                             D
Chorus: Welcome to the Ho-tel Cal-i-for-nia
F#                                             Bm
Such a love-ly place (Such a love-ly place)___ Such a love-ly face
G                                 D
They’re liv-in' it up at the Ho-tel Cal-i-for-nia
Em                                                  F#
What a nice sur-prise (what a nice sur-prise)___ Bring your al-i-bis

Bm                         F#
5. Mir-rors on the ceil-ing___ The pink cham-pagne on ice
A                                    E
And she said  "We are all just pris-on-ers  here___ Of our own device"
G                                 D
And in the mas-ter's cham-bers___ They ga-thered for their feast
Em                                                    F#
They stab it with their steel-y knives___ But they just can't kill the beast

Bm                                F#
6. Last thing I re-mem-ber___ I was  run-ning for the door
A                                             E
I had to find the pas-sage back___ To the place I was be-fore
G                                      D
"Relax" said the night man___ "We are  pro-grammed to re-ceive
Em                                      F#    
You can check-out a-ny time you like___ But you can ne-ver leave!"

Outro
||:  Bm  |  F#  |  A  |  E  |  G  |  D  |  Em  |  F#  :|| x4
        ...repeat & fade or end on Bm
</pre>
</div>
<p><a class="accordion-toggle" href="#content-2"><li>Smoke On The Water - Deep Purple | 112 BPM</li></a></p>
<div class="accordion" id="content-2">
<pre>
INTRO: 
G Bb C, G Bb C# C, G Bb C Bb G (6x)

G
We all came out to Montreal
F       G
On our way to Rio's shoreline
To make records with the mobile
F          G
We didn't have much time
But Frank Zappa and the Mothers
F      G          
We're at the best place around
When some stupid with a flagon
F        G
Burned the place to the ground


CHORUS:
C            Ab
Smoke on the water
G
A fire in the sky!
C            Ab
Smoke on the water-

(Do INTRO 2x)

G
It burned down the gamblin' house
F      G
It died with an awful sound
A funky clod was running in and out
F        G
Pulling kids on the ground
When it all was over
F       G
We had to find another place
But swiss time was running out
F        G
It seemed that we would lose the race

(Repeat CHORUS)

AD LIB: G---  C7-F

(Repeat INTRO Twice)

G
We ended up at the Ground Hotel
F        G
It was empty, cold and dead
But with the Rolling truck Stones
playing just outside
F                G
Making our music bad
With the fumin' lights a few old bids
F                     G
We made the place to swell
No matter what we get out of this
F      G
I know, I know we'll never forget

(Repeat CHORUS)

CODA: Fade G--</pre>
</div>
<p><a class="accordion-toggle" href="#content-3"><li>Highway Star - Deep Purple | 160 BPM</a></li></p>
<div class="accordion" id="content-3">
<pre>
[Intro]
G5 F5    E5 F5   G5 F5   E5 F5
G5
C5  Bb5

[Verse 1]
G5                                                        Bb5 C5 Bb5
Nobody gonna take my car, I'm gonna race it to the ground
G5                                                           Bb5 C5 Bb5
Nobody gonna beat my car, it's gonna break the speed of sound
F5                                                F5  E5  Eb5
Ooh, it's a killing machine, it's got everything
D5
Like a driving power, big fat tires, everything

[Chorus]
A5  Am         A5  Am      A5   Am     Am
I  love it and I  need it, I  bleed it    yeah, it's a wild hurricane
C5   D5     C5   D5    C5   D5   F5     G5    A5      C5  Bb5
Al..right, hold tight, I'm  a   high...way  star

[Verse 2]
G5                                                       Bb5 C5 Bb5
Nobody gonna take my girl, I'm gonna keep her to the end
G5                                                       Bb5 C5 Bb5
Nobody gonna have my girl, she stays close on every bend
F5                                                  F5  E5  Eb5
Ooh, she's a killing machine, she's got everything
D5
Like a moving mouth, body control and everything

[Chorus]
A5  Am       A5 Am       A5  Am      Am
I  love her, I need her, I  seed her    yeah, she turns me on
C5  D5      C5   D5    C5  D5  F5    G5    A5
Al..right, hold tight, I'm a  high..way  star

[Organ Solo]
D5
Am  G#5  G5  F#5    x2
F5    D5    A5
D5   F5 G5 F5    x4
D5
D5 D5    F5 G5 A5     C5 C5    D5     C5 D5 C5 D5
D5 C5 A5 Ab5 G5 F5 D5 C5      C5 Bb5

[Verse 3]
G5                                                   Bb5 C5 Bb5
Nobody gonna take my head, I got speed inside my brain
G5                                                         Bb5 C5 Bb5
Nobody gonna steal my head, now that I'm on the road agai...n
F5                                             F5  E5  Eb5
Ooh, I'm in heaven again, I've got everything
D5
like a moving ground throttle, control and everything.

[Chorus]
A5  Am      A5  Am      A5  Am     Am
I  love it, I  need it, I  seed it    eight cylinders all mine
C5  D5      C5   D5    C5   D5   F5    G5    A5       C5  Bb5
Al..right, hold tight, I'm  a   high..way  star

[Guitar Solo]
D5     A5
D5 G5  C5  A5  x4
A5     C5  Bb5

[Verse 4]
G5                                                        Bb5 C5 Bb5
Nobody gonna take my car, I'm gonna race it to the ground
G5                                                           Bb5  C5 Bb5
Nobody gonna beat my car, it's gonna break the speed of sound
F5                                                F5  E5  Eb5
Ooh, it's a killing machine, it's got everything
D5
Like a driving power, big fat tyres and everything

[Chorus]
A5 Am         A5 Am      A5  Am           Am
I love it and I need it, I bleed it yeah,    it's a mad hurricane
C5   D5     C5   D5    C5   D5   F5    G5    A5
Al..right, hold tight, I'm  a   high..way  star
C5   D5   F5    G5     A5   C5   D5   F5    G5     A5          A5
I'm  a   high..way ..star,  I'm  a   high..way ..staaaaaaaaar</pre>
</div>
<p><a class="accordion-toggle" href="#content-4"><li>Count On You - Tommy Shaw | 80 BPM</a></li></p>
<div class="accordion" id="content-4">
<pre>
C                    C6
When I feel like the world's gone mad
Cmaj7
And I need you so bad
C                    F
But I don't know where you are
G          C
I cry these tears

C                  C6
On our own, we've been so far
Cmaj7
We've sworn at the moon
C                 F
And we've counted a million stars
G            C
My love's still true

C                    C6
Friends have come and gone
Cmaj7
Some have left me alone
C                      F
But I've stared at these walls before
G        C
And they've made me blue

C                C6
All along in my heart I've known
Cmaj7            C
There's one thing in my life 
F
That still rings true
G        C
I can count on you


[Chorus]

C
Count on you to be there
F
No questions in the air
C
No asking why or where
G
No looking back

C
Count on you every time
F
To ease my worried mind
C               C
You'll forever be important to me
G
My miracle find


[Verse]

C             C6
If I had to choose one place
Cmaj7                C
To spend the rest of my days
F
Anywhere would do
G              C
'Long as it's close to you
Oh, woah, oh


[Solo]

C  C6  Cmaj7  C  F  G  C  (2x)


[Chorus]

C
Count on you to be there
F
No questions in the air
C
No asking why or where
G
No looking back

C
Count on you every time
F
To ease my worried mind
C               C
And you'll forever be important to me
G
My miracle find


[Verse]

C       C6
Now, oh, now
Cmaj7
I've traveled so far
C                    F
Yet I'm right back where you are
G       C
Just me and you

C             C6
Now and forevermore
Cmaj7
As the years roll by
C                   F
I'm beginning to see that I
G        C
Can count on you
</pre>
</div>
<p><a class="accordion-toggle" href="#content-5"><li>My Way - Frank Sinatra | 75 BPM</a></li></p>
<div class="accordion" id="content-5">
<pre>        
And [D]now, the end is [F#m]near. And so I [Am]face the final [B7]curtain
My [Em]friends, I’ll say it [Em7]clear, I’ll state my [A7]case of which I’m [D]certain
I’ve live a life that’s [D7]full, I travelled [G]each and every [Gm]high way
And [D]more, much more than [A]this, I did it [G]my [D]way

[D]Regrets, I have a [F#m]few but then [Am]again, too few to [B7]mention
I [Em]did what I have to [Em7]do, and saw it [A7]through without [D]exemption
I’ve planned each chartered [D7]course, each careful [G]step along the [Gm]by way
And [D]more, much more than [A]this, I did it [G]my [D]way

Yes there were [D]times. I’m sure you [D7]knew
Then I bit [G]off, more than I could [Em]chew
But through it [Em7]all. When there were [A]doubt
I ate it [F#m]up, and spit it [Bm]out I face it [Em7]all
And I’ve stood [A]tall, and did it [G]my [D]way

I’ve [D]loved, I’ve laughed and [F#m]cried, I have my [Am]fill my share of [B7]losing
And [Em]now, as tears sud [Em7]side, I find it [A7]all so am [D]using
To think I did all [D7]that and may I [G]say, not in a [Gm]shy way
Oh [D]no, Oh no not [A]me, I did it [G]my [D]way
</pre>
</div>
<p><a class="accordion-toggle" href="#content-6"><li>Green Green Grass Of Home - Tom Jones | 95 BPM</a></li></p>
<div class="accordion" id="content-6">
<pre>
Intro: [G]  [C]       [G]  [D]     [G] [D7]
[G] The old home town looks the same
As I [C] step down from the [G] train,
And there to meet me is my mama and [D] papa. [D7]
Down the [G] road I look and [G7] there runs Mary,
[C] Hair of gold and lips like cherries,
It's [G] good to touch the [D] green, green [D7] grass of [G] home [D7]

Yes, they'll [G] all come to [G7] meet me,
Arms [C] reaching, smiling sweetly,
it's [G] good to touch the [D] green, green [D7] grass of [G] home. [D7]
The [G] old house is still [G7] standing, though the [C] paint is cracked and [G] dry,
And there's that old oak tree that I used to [D] play on. [D7]
Down the [G] lane I walk and with [G7] my sweet Mary,
[C] Hair of gold and lips like cherries,
It's [G] good to touch the [D] green, green [D7] grass of [G] home.

[G] Then I awake and look around me [C] at the four gray walls that su[G]rround me,
And I realize, yes, I  was only [D] dreaming.  [D7]
For there's a [G] guard and there's a [G7] sad old padre,
[C] Arm and arm we'll walk at daybreak,
[G] Again I'll touch the [D] green, green [D7] grass of [G] home. [C] [G]

Yes, they'll [G] all come to [G7] see me in the [C] shade of that old oak tree,
As they [G] lay me ‘neath the [D] green, green [D7] grass of [G] home. [C] [G]
</pre>
</div>
<p><a class="accordion-toggle" href="#content-7"><li>Nothing Gonna Stop Us Now - Straship | 96 BPM</a></li></p>
<div class="accordion" id="content-7">
<pre>
Intro:  F#   Ebm   B   C#    X 2
F#                  Ebm 
Lookin' in your eyes I see a paradise
B                         C# 
This world that I found is too good to be true
F#                                Ebm 
Standing here beside you, want so much to give you
B                     C# 
This love in my heart and I feel it for you
*
F#                        Ebm 
Let 'em say we're crazy, I'll give a path
B                               C# 
Put your hands in my hand baby don't ever look back
F#                        Ebm               
Let the world around us, just fall apart
B                             E              C# 
Baby we can make it if we're heart to heart
Chorus:
F#                        Ebm 
And we can build this thing together, Standing strong forever
B                        C# 
Nothing's gonna stop us now
F#                       Ebm 
And if this world runs out of lovers, We'll still have each other 
B                           C#                      E 
Nothing's gonna stop us,  Nothing's gonna stop us,  Now  woah woah oh
Bridge
F#       Bbm                  B 
Woooooo, all that I need is you
Abm           C# F#   Bbm                      B 
All that I ever need in the whole of the world to do
Abm                                C#                   D 
Is hold you forever, ever and ever...           Hey!

Solo:   G   Em   C   D 
</pre>
</div>
<p><a class="accordion-toggle" href="#content-8"><li>Fly Me To The Moon - Frank Sinatra | 110 BPM</a></li></p>
<div class="accordion" id="content-8">
<pre>
Fly [Am7]me to the moon [Dm7]
Let me play [G7]among the stars [Cmaj7]
[F]Let me see what spring [Dm7]is like
On a Jupiter [E7]and Mars [Am7]
In other [Dm7]words, [G7]holding hand [C]
In other [Dm7]words, [G7]baby kiss me [C] [E]
Fill [Am7]my heart with song [Dm7]
And let me sing [G7]for ever more [Cmaj7]
[F]You are all I long [Dm7]for
All I worship [E]and adore [Am7] [A7]
In other [Dm7]words, [G7]please be true [C] [A7]
In other [Dm7]words, [G7]I love you 
</pre>
</div>
<p><a class="accordion-toggle" href="#content-9"><li>All Of Me - Frank Sinatra | 110 BPM</a></li></p>
<div class="accordion" id="content-9">
<pre>
[Verse]
C
All of me
E7
Why not take all of me?
A7
Can't you see,
Dm
I'm no good without you?
E7
Take my lips
Am7
I want to lose them
D7
Take my arms
Dm  G7
I'll never use them
C
Your goodbye
E7
Left me with eyes that cry
A7
How can I
Dm
Get along without you?
F           Fm
You took the part
C      E7   A7
That once was my heart
Dm           G7
So why not, why not
C E7 Dm G7
Take all of me?

e|-----x-----|
B|-----7-----|
G|-----5-----|
D|-----7-----|
A|-----6-----|
E|-----x-----|

Cmaj7
All of me
E7
Come on get all of me
A7
Can't you see,
Dm7
I'm just a mess without you
E7
Take my lips
Am7
I want to lose them
D7
Get a piece of these arms
Dm7     G7
I'll never use them
Cmaj7
Your goodbye
E7
Left me with eyes that cry
A7
How can I
Dm7
Ever make it without you?
F                    Fm7
You know you got the part
Cmaj7      E7      A7
That used to be my heart
Dm7                 G7
So why not, why not
Cmaj7 Ebdim7 Dm7 G7
Take all of me?
</pre>
</div>
<p><a class="accordion-toggle" href="#content-9a"><li>Hello Dolly - Louis Armstrong | 110 BPM</a></li></p>
<div class="accordion" id="content-9a">
<pre>
[Verse 1]
N.C.          C                     Am
I said hel..lo, dolly..well, hel..lo, Dolly.
CM7              Cdim             Dm G7
It's so nice to have you back where you belong.
G7             Dm                   Bb
You're lookin' swell, Dolly...I can tell, Dolly.
Dm                     G7
You're still glowin'...you're still crowin'...you're
C     Cdim  G7
still go....in'   strong.
C                       Am
I feel that room swayin'..while the band's playin'..
Gm7                C7                   FM7
one of your old favourite songs, from way back when.
E7  Am       Em            Am                Em
So, take her wrap, fellas..find her an empty lap, fellas..
D7             G7       C    Cdim Dm G7
Dolly'll never go away again.

[Verse 2]
N.C.          C                     Am
I said hel..lo, dolly..well, hel..lo, Dolly.
CM7              Cdim             Dm G7
It's so nice to have you back where you belong.
G7             Dm                   Bb
You're lookin' swell, Dolly...I can tell, Dolly.
Dm                     G7
You're still glowin'...you're still crowin'...you're
C     Cdim  G7
still go....in'   strong.
C                       Am
I feel that room swayin'..while the band's playin'..
Gm7                C7                   FM7
one of your old favourite songs, from way back when.
Am     Em             Am                Em
So...golly, gee, fellas....find her an empty knee, fellas..
D7             G7                D7           G7
Dolly'll never go away....I said she'll never go away..
D7             G7        C  G7 C
Dolly'll never go away, again.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-10"><li>Amor Amor Amor - Los Panchos 110 BPM</a></li></p>
<div class="accordion" id="content-10">
<pre>
[Verse]
C        G7  C  G7
Amor, amor,  amor
C Dm          Em Cdim7
nació de tí,  nació de mí
Dm   G7
de la esperanza

[Chorus]
Dm    A7    Dm
Amor, amor, amor
G7
nació de Dios para los dos
C     C B7
nació del alma

[Verse]
Em
Sentir que tus besos
B7
se anidaron en mí
        Em
igual que palomas mensajeras
de luz
G
Saber que mis besos
Am
se quedaron en tí

haciendo en tus labios
Dm         G7
la señal de la cruz
C        G7  C  G7
Amor, amor,  amor
C Dm          Em Cdim7
nació de tí,  nació de mí
Dm   G7
de la esperanza

[Chorus]
Dm    A7    Dm
Amor, amor, amor
G7
nació de Dios para los dos
C     C B7
nació del alma
</pre>
</div>
<p><a class="accordion-toggle" href="#content-11"><li>More - Andy Williams | 110 BPM</a></li></p>
<div class="accordion" id="content-11">
<pre>
D             Bm                Em        A    A7
More than the greatest love the world has known,
F#m         Bm             Em   A   A7
This is the love I give to you alone.
D             Bm               Em     A  A7
More than the simplest words I try to say,
F#m    Bm               Em        F#7
I only live to love you more each day.

CHORUS:
Bm                              Bm7
More than you'll never know, my arms,
Bm6             Em            E7
long to hold you, so my life, will be in your keeping,
Em                A             A7
waking, sleeping, laughing, weeping.

#2.
D           Bm          Em        A  A7
Longer than always is a long long time,
F#m       Bm           Em        A   A7
But far beyond forever you'll be mine.
Bm       Bm7           Em           Gm            Em
I know I never lived before, and my heart is very sure,
A                   D
No one else could love you more.

CHORUS:

REPEAT#2.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-12"><li>Secret Love - Doris Day | 110 BPM</a></li></p>
<div class="accordion" id="content-12">
<pre>
INTRO: B G#m B (x2)

#1.
B      G#m          B
Once I had a secret love..
G#m  B         G#m             C#m F#
that lived within the heart of me.
C#m     F#             C#m F#
All too soon my secret love..
C#m    F#            B
became impatient to be free.

#2.
B     G#m               B
So, I told the friendly star..
G#m B        G#m            C#m F#
the way that dreamers often do.
C#m      F#            C#m
Just how wonderful you are..
F#  C#m     F#              B
and why I'm so in love with you.

CHORUS:
G#m    C#                F#      A#m
Now, I shout it from the highest hills..
F#m  B               E      Em
even told the golden daffo..dils.
B                       A   G#
At last my heart's an open door..
C#m              F#        B
and my secret love's no secret anymore.


(INTERLUDE:) B G#m B G#m B G#m C#m F#..

C#m F# C#m F# C#m F# B

CHORUS:
G#m   C#                F#      A#m
Now I shout it from the highest hills..
F#m  B               E      Em
even told the golden daffo..dils.
B                       A   G#
At last my heart's an open door..
C#m              F#        B
and my secret love's no secret anymore.


OUTRO: B G#m B..(Fade.)
</pre>
</div>
<p><a class="accordion-toggle" href="#content-13"><li>Our Day Will Come - Ruby and the Romantics | 110 BPM</a></li></p>
<div class="accordion" id="content-13">
<pre>
[xx1323]
Intro:      Eb7    Dm7   G7                     Fm6 = [133131] or [xx0111]


C            Eb7  Dm7                G7
Our day will come ... and we'll have everything,
C               Eb7 Dm7            G7
We'll share the joy ... falling in love can bring.  
Gm7        C7           Gm7  C7  FM7
No one can tell me that I'm  too young to know, 
Fm6                        C    Em7    Dm7    G7
I love you so,  and you love me.  


C            Eb7  Dm7            G7
Our day will come ... if we just wait awhile, 
C            Eb7 Dm7                G7
No tears for us ...  think love and wear a smile.  
Gm7        C7           Gm7   C7    FM7
Our dreams have magic because we'll always stay,
Fm6            C   Am  Dm7 G7    C       Gm    Dm7    G7
In love this way, our day.... will..come.  


Instrumental:   (Chords of first two lines of verse):
C            Eb7  Dm7        G7
C            Eb7  Dm7        G7

(Continue with balance of verse):
Gm7        C7           Gm7   C7    FM7
Our dreams have magic because we'll always stay,
Fm6            C   Am  Dm7  G7    C        Gm    Dm7    G7
In love this way, our day......will..come.  

Outro:

C   Am  Dm7  G7    C
Our day .... will..come, 
Am  Dm7 G7    C       Gm    Dm7    G7
Our day.....will..come.      
</pre>
</div>
<p><a class="accordion-toggle" href="#content-14"><li>Meditation - Antônio Carlos Jobim | 110 BPM</a></li></p>
<div class="accordion" id="content-14">
<pre>
G6    Gdim
In my loneliness,
G6
When you're gone and I'm all by myself,
Bm7                E7/-9
And I need your caress
Am7    Cm6
I just think of you,
Bm7                       E7/-9
And the thought of you holding me near,
Am7                 D7/9
Makes my loneliness soon disappear
G6            Gdim
Though you're far away,
G6
I have only to close my eyes,
Bm7                 E7/-9
And you are back to stay
Am7    Cm6
I just close my eyes,
Bm7                      E7/-9
And the sadness that missing you brings
Am7                         D7/9
Soon is gone and this heart of mine sings
Cmaj7  Cm6
Yes I  love you so,
Bm7            E7/-9         Am7   F#7/+5
And that for me is all I need to know
G6     Gdim
I will wait for you,
G6
Til the sun falls from out of the sky,
Bm7                E7/-9
For what else can I do
Am7    Cm6
I will wait for you
Bm7         E7/-9           Am7
Meditating, how sweet life will be,
Adim         G6
When you come back to me
</pre>
</div>
<p><a class="accordion-toggle" href="#content-15"><li>Wave - Frank Sinatra | 110 BPM</a></li></p>
<div class="accordion" id="content-15">
<pre>           
Tone [D]       
(intro)
So [Dmaj9]close your eyes
For [Bbdim]that's a lovely way to [Am7]be    [D7b9]    
Aware of [Gmaj7]things your heart a[Gm6]lone was meant to [F#7]see
[B7b9]   The fundamental [Bm7]loneliness [E7]goes
Whenever [Bb7]two can dream a [A7]dream to[Dm7]gether[G7]     [Dm7]      [G7]  

(Verse 2)
You can't de[Dmaj9]ny   
Don't [Bbdim]try to fight the rising [Am7]sea  [D7b9]    
Don't fight the [Gmaj7]moon, the stars a[Gm6]bove and don't fight [F#7]me 
[B7b9]   The fundamental [Bm7]loneliness [E7]goes
Whenever [Bb7]two can dream a [A7]dream to[Dm7]gether[G7]     [Dm7]      [G7]  

(Bridge)
[Gm7]When I saw you [C7]first, the time was [Am7]half past three
[Ab6]   When your eyes met [Bb7b9]mine, it was e[Gm7]ternity  [A7#5]    

(Verse 3)
By now we [Dmaj9]know 
The [Bbdim]wave is on its way to [Am7]be   [D7b9]    
Just catch that [Gmaj7]wave, don't be a[Gm6]fraid of loving [F#7]me 
[B7b9]   The fundamental [Bm7]loneliness [E7]goes
Whenever [Bb7]two can dream a [A7]dream to[Dm7]gether[G7]     [Dm7]      [G7]  

(Instrumental)
[Dmaj7]        [Bbdim]        [Am7]       [D7b9]    [Gmaj7]        [Gm6]        [F#7]       [B7b9]    
[Bm7]        [E7]        [Bb7]       [A7]  [Dm7]        [G7]        [Dm7]       [G13]   

(Bridge)
[Gm7]When I saw you [C7]first, the time was [Am7]half past three
[Ab6]   When your eyes met [Bb7b9]mine, it was e[Gm7]ternity  [A7#5]    

(Verse 3)
By now we [Dmaj9]know 
The [Bbdim]wave is on its way to [Am7]be   [D7b9]    
Just catch that [Gmaj7]wave, don't be a[Gm6]fraid of loving [F#7]me 
[B7b9]   The fundamental [Bm7]loneliness [E7]goes
Whenever [Bb7]two can dream a [A7]dream to[Dm7]gether[G7]     [Dm7]      [G7]  

(Outro)
[Dm7]      [G13]       
</pre>
</div>
<p><a class="accordion-toggle" href="#content-18"><li>The Girl From Ipanema - Frank Sinatra | 110 BPM</a></li></p>
<div class="accordion" id="content-18">
<pre>        
Verse 1
[Fmaj7]Tall and tanned and young and lovely
The [G7]girl from ipanema goes walking
And [Gm7]when she passes, each [F#7b5]one she passes goes - ah[Fmaj7]hh!    [F#7b5]     

[Fmaj7]When she walks, shes like a samba
That [G7]swings so cool and sways so gentle
That [Gm7]when she passes, [F#7b5]each one she passes goes - oo[Fmaj7]hh!  

Chorus
[F#maj7]Oh, but I watch her so s[B9]adly,
[F#m7]How can I tell her I l[D9]ove her?
[Gm7]Yes, I would give my heart g[Eb9]ladly
But each [Am7]day, when she walks to the [Abm7]sea 
She l[Gm7]ooks straight ahead, not at [F#7b5]me   

Verse 2
[Fmaj7]Tall, and tanned and young and lovely
The [G7]girl from Ipanema goes walking
And [Gm7]when she passes, I s[F#7b5]mile - but she doesnt se[Fmaj7]e    
[F#7b5]She just doesn't se[Fmaj7]e, no,[F#7b5] she 
just doesn't see.[Fmaj7]..         [F#7b5]       [Fmaj7]     

Verse 3
[Fmaj7]Olha, que coisa mais linda, Mais cheia de gra[G7]ça,
[G7]É ela, menina, que vem e que pas[Gm7]sa 
[Gm7]Num doce bala[F#7b5]nço, a caminho d[Fmaj7]o mar  [F#7b5]     
[Fmaj7]Moça do corpo dourado, do sol de i[G7]panema,
[G7]O seu balançado mais que um poe[Gm7]ma 
a coisa[F#7b5] mais linda que eu já vi p[Fmaj7]assar

Solo
[Fmaj7]      [G7]   [Gm7]    [F#7b5]      [Fmaj7]      [F#7b5]     
Chorus
[F#maj7]Oh, but I watch her so s[B9]adly,
[F#m7]How can I tell her I l[D9]ove her?
[Gm7]Yes, I would give my heart g[Eb9]ladly
But each [Am7]day, when she walks to the [Abm7]sea 
She l[Gm7]ooks straight ahead, not at [F#7b5]me   

Verse 4
[Fmaj7]Tall, and tanned and young and lovely
The [G7]girl from Ipanema goes walking
And [Gm7]when she passes, I s[F#7b5]mile - but she doesnt se[Fmaj7]e    
[F#7b5]She just doesn't se[Fmaj7]e, no,[F#7b5] she just
doesn't see [Fmaj7]           [F#7b5]       [Fmaj7]     
</pre>
</div>
<p><a class="accordion-toggle" href="#content-19"><li>Can't Take My Eyes Off You - Frankie Valli | 110 BPM</a></li></p>
<div class="accordion" id="content-19">
<pre>
[Verse 1]
C
You're just too good to be true.
Cmaj7
Can't take my eyes off you.
C7
You'd be like heaven to touch.
F
I wanna hold you so much.
Fm
At long last love has arrived.
C
And I thank God I'm alive.
D
You're just too good to be true.
Dm            C
Can't take my eyes off you.

[Verse 2]
C
Pardon the way that I stare.
Cmaj7
There's nothing else to compare.
C7
The thought of you leaves me weak.
F
There are no words left to speak.
Fm
But if you feel like I feel.
C
please let me know that it's real.
D
You're just too good to be true.
Dm            C
Can't take my eyes off you.

[Bridge]
Dm              G
Duh duh duh duh duh dup dup duh
C               Am
Duh duh duh duh duh dup dup duh
Dm              G
Duh duh duh duh duh dup dup duh
C               A
Duh duh duh duh duuuuuh

[Chorus]
Dm7               G
I love you baby  and if it's quite all right,
C                Am7
I need you baby to warm the lonely night
Dm7   G                  C         A
I love you baby, Trust in me when I say
A         Dm7                G
Oh pretty baby, don't let me down, I pray.
C                 Am7
Oh pretty baby, now that I found you, stay.
Dm7                       Dm        G
And let me love you, oh baby. Let me love you.

[Verse 3]
Eb
You're just too good to be true.
Ebmaj7
Can't take my eyes off you.
Eb7
You'd be like heaven to touch.
Ab
I wanna hold you so much.
Abm
At long last love has arrived.
Eb
And I thank God I'm alive.
F
You're just too good to be true.
Fm            Eb
Can't take my eyes off you.

[Bridge]
Dm              G
Duh duh duh duh duh dup dup duh
C               A
Duh duh duh duh duuuuuh

[Chorus]
Dm7               G
I love you baby  and if it's quite all right,
C                Am7
I need you baby to warm the lonely night
Dm7   G                  C         A
I love you baby, Trust in me when I say
A         Dm7                G
Oh pretty baby, don't let me down, I pray.
C                Am7
Oh pretty baby, now that I found you, stay.
Dm7                       Fm
And let me love you, oh baby. Let me love you.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-20"><li>From Russia With Love - Matt Monro | 110 BPM</a></li></p>
<div class="accordion" id="content-20">
<pre>
[intro]

Cmaj7 / Bbmaj7 / Ebmaj7 /// A7-13 A7


Dm          Bb/D        E7
From Russia with love
E7       A7
I fly to you
Dm              Dm7
Much wiser since my
Dm6  Em7-5       A7
good-bye  to    you
D7            D7-9  D7
I've travelled the   world
Gm  Gm7/F  Em7-5
to learn,   I must
Bb/D      A7          Dm
return from Russia with love

[middle]

Gb7/Db D7   Gm7
I've   seen places,
C7        F
faces and smiled for a moment
Gm6 Edim7             Fmaj7 Fadd9 Fmaj7
But oh, ...you haunted me so...
Gb7/Db D7 Gm7
Still  my tongue tied,
C7               Fmaj7    A7 Dm
young pride Would not let my love
E7      Gm6
for you show
A7               A-9 A7
In case you'd say no



Dm       Bb/D     E7
To Russia I flew
E7            A7
but there and then
Dm         Dm7   Dm6
I suddenly knew you'd
Em7-5 A7
care  again
D7       D7-9 D7
My running a - round is
Gm  Gm7/F  Em7-5
through....
Bb/D       A7
I fly to you,..
A7      A-9
from ..Russia..
A7
with
Dm      Gm Gm7/F Em7-5 Ebmaj7      D
</pre>
</div>
<p><a class="accordion-toggle" href="#content-21"><li>Strangers In The Night - Frank Sinatra | 110 BPM</a></li></p>
<div class="accordion" id="content-21">
<pre>
F Fmaj7 C

F
Strangers in the night exchanging glances
Fmaj7
Wond´ring in the night what were the chances 
F               Fmaj7
We´d be sharing love
Gm
Before the night was through.

Gm
Something in your eyes was so inviting,
Gm7
Something in your smile was so exciting,
Gm              Gm7
Something in my heart,
Gm        C         F
Told me I must have you.

Am               D7     Am         D7
Strangers in the night, two lonely people
Am                       D7     Am        D7
We were strangers in the night, up to the moment
Gm
When we said our first hello.
Gm7
Little did we know
Gm              F
Love was just a glance away,
Gm             C
A warm embracing dance away and 

F
Ever since that night we´ve been together.
Fmaj7
Lovers at first sight, in love forever.
F                C7
It turned out so right,
F
For strangers in the night.

Am               D7     Am         D7
Strangers in the night, two lonely people
Am                       D7     Am        D7
We were strangers in the night, up to the moment
Gm
When we said our first hello.
Gm7
Little did we know
Gm              F
love was just a glance away,
Gm             C
A warm embracing dance away and 

G
Ever since that night we´ve been together.
Gmaj7
Lovers at first sight, in love forever.
G6               D
It turned out so right,
G
For strangers in the night.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-22"><li>Besame Mucho - Beatles | 110 BPM</a></li></p>
<div class="accordion" id="content-22">
<pre> 
Gm             Cm    Cm6 Cm7 Cm6
Besame, besame mucho.
Cm                                           Gm
Each time I bring you a kiss I hear music divine.
G7             Cm
So, besame, besame mucho.
Gm                Eb             D7         Gm
I'll love you forever, say that you'll always be mine.


[Pre-Chorus]
Cha-cha-boom!

Gm                         Cm      Cm6 Cm7 Cm6
Dearest one, if you should leave me
Cm                                              Gm
Then each little dream would take wings and my life would be through.
G7             Cm
Oh, besame, besame mucho.
Gm               Eb           D7          Gm
Ooh, love me forever, make all my dreams come true.


[Chorus]
Cm
Ooh, this joy is something new,
Gm
My arms they're holding you,
D7                          Gm
Never knew this thrill before.
Cm                     Gm
Who ever thought I'd be
        A
Holding you close to me whispering,
D7
`It's you I adore'?

Gm                         Cm      Cm6

[Pre-Chorus]
Cm6
Yes, so, dearest one, if you should leave me
Cm                                              Gm
Then each little dream would take wings and my life would be through.
G7             Cm
Oh, so besame, besame mucho.
Gm                Eb           D7          Gm
Yeah, I'll love you forever, make all my dreams come true.


[Chorus]
Cm
Ooh, this joy is something new,
Gm
My arms they're folding you,
D7                          Gm
Never knew this thrill before.
Cm                     Gm
Who ever thought I'd be
        A
Holding you close to me whispering,
D7
`It's you I adore'?

Gm                         Cm      Cm6 Cm7 Cm6
Oh, so dearest one, if you should leave me
Cm                                              Gm
Then each little dream would take wings and my life would be through.
G7             Cm
Oh, so besame, besame mucho.
Gm                Eb           D7          Gm
Ah, now love you forever, make all my dreams come true.
Gm                Eb           D7          Gm
Ooh, love you forever, make all my dreams come true.
Gm                Eb           D7          Gm
Ooh, love you forever, make all my dreams come true.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-23"><li>Smooth - Santana | 110 BPM</a></li></p>
<div class="accordion" id="content-23">
<pre>
Intro:
|AM F E7| || [repeat 4 times]

Verse 1:
Am F E7
Man, it's a hot one
Am F E7
Like seven inches from the midday sun

Well, I hear your whisper
Dm7 Dm7/C Bm7b5 E/G#
And the words melt everyone
Am F E7
But you say so cool
Am F E7
My Mune-quita
Am F E7
My spanish Harlem Mona Lisa
Dm7 Dm7/C Bm7b5
Well, you're my reason for reason,
E/G# Am F E7
The step in my groove


Chorus:
Am F E7
And if you said this life ain't good enough,
Am F E7
I would give my world to lift you up
Am F E7 Dm7 Dm7/C Bm7b5
I could change my life to better suit your mood
G7 F#7sus4 E7
Because you're so smooth
Am F E7
Well, and it's just like the ocean under the moon
Am F E7
Well, it's the same as the emotion that I get from you
Am F E7
You got the kind of lovin' that can be so smooth, yeah
Dm7 N.C. E7
Gimme your heart, make it real
N.C.
Or else forget about it


Interlude:
|AM F E7| ||


Verse 2:
Am F E7
Well, I'll tell you one thing,
Am F E7
If you would leave it'd be a cryin' shame
Dm7
In every breath and every word
DM7/C Bm7b5 E/G# Am F E7
I hear your name callin' me out, yeah
Am F E7
Well, out from the barrio
Am F E7
You hear my rhythm on your radio
Dm7
And you feel the turning of the world,
Dm7/C Bm7b5 E/G#
So soft and slow,
Am F E7
Turnin' you round and round

[Chorus]

Solo:
|AM F E7| || [repeat 7 times]
|Dm7 Dm7/C Bm7b5| G7 | F#7sus4 E7| |

[Chorus]

Outro - [Chorus (instrumental) until fade]
</pre>
</div>
<p><a class="accordion-toggle" href="#content-24"><li>Smooth Operator - Sade | 110 BPM</a></li></p>
<div class="accordion" id="content-24">
<pre>
[Verse]
Dm              Dm/Db
He's laughing with another girl
Am7/C           Am7/Cb
And playing with another heart.
Dm              Dm/Db
Placing high stakes, making hearts ache.
Am7/C           Am7/Cb
He's loved in seven languages.
Dm              Dm/Db
Diamond nights and ruby lights, high in the sky.
Am7/C           Am7/Cb
Heaven help him, when he falls.

Dm      Am7  Gm7 Am7 Dm    Am7  Gm7 Am7
Diamond life,           lover boy.
We move in space with minimum waste and maximum joy.
Dm      Am7  Gm7 Am7        Dm   Am7  Gm7 Am7
City lights             and business nights.
Dm      Am7  Gm7 Am7            Dm   Am7  Gm7 Am7
When you require streetcar desire for higher heights.

Gm7             Am7                    Dm     Dm/Db  Am7/C   Am7/B
No place for    beginners or sensitive hearts
Gm7             Am7            Dm     Dm/Db  Am7/C   Am7/B
When sentiment is left to chance.
Gm7             Am7                    Dm
No place to be ending but somewhere to start.
Fill A

No need to ask.


[Chorus]
Dm      Am7    Gm7    Am7
He's a smooth operator,
Dm   Am7  Gm7 Am7
smooth operator,
Dm    Am7  Gm7 Am7
smooth operator,
Dm    Am7  Gm7 Am7
smooth operator.
Dm      Am7  Gm7 Am7             Dm   Am7  Gm7 Am7
Coast to coast, LA to Chicago, western male.
Dm      Am7            Gm7       Am7      Dm   Am7  Gm7 Am7
Across the north and south, to Key Largo, love for sale.


[Verse]
Face to face, each classic case.

We shadow box and double cross,

Yet need the chase.
""Some where here is the guitar, sax solo" "Dorfun make it your own
solo"

Gm7                     Am7    Dm
A license to love, insurance to hold.
Gm7                             Am7       Dm
Melts all your memories and change into gold.
Gm7                     Am7              Dm
His eyes are like angels but his heart is cold.
Fill A
No need to ask.


[Chorus]
Dm      Am7  Gm7 Am7
He's a smooth operator,
Dm    Am7  Gm7 Am7
smooth operator,
Dm    Am7  Gm7 Am7
smooth operator,
Dm    Am7  Gm7 Am7
smooth operator.
Dm      Am7  Gm7 Am7             Dm   Am7  Gm7 Am7
Coast to coast, LA to Chicago, western male.
Dm      Am7  Gm7 Am7             Dm   Am7  Gm7 Am7
Across the north and south, to Key Largo, love for sale.
Dm    Am7  Gm7 Am7             Dm   Am7  Gm7 Am7
Smooth operator,
Dm    Am7  Gm7 Am7             Dm   Am7  Gm7 Am7
smooth operator,
Dm    Am7  Gm7 Am7             Dm   Am7  Gm7 Am7
smooth operator,
Dm    Am7  Gm7 Am7             Dm   Am7  Gm7 Am7
smooth operator,
Dm    Am7  Gm7 Am7             Dm   Am7  Gm7 Am7
smooth operator...
</pre>
</div>
<p><a class="accordion-toggle" href="#content-25"><li>Do That To Me One More Time - Captain & Tennille | 110 BPM</a></li></p>
<div class="accordion" id="content-25">
<pre>        
[C]Do that to me one more [Am]time
Once is never [F]enough with a man like [G]you
[C]Do that to me one more [Am]time
I can never get [F]enough of a man like [G]you, [E]oh
[Am]Kiss [Ammaj7]me like [Am7/G]you just did.[D]...
Oh, [F]baby, [G7]do that to me once again [C] [Am] [F] [G]

[C]Pass that by me one more [Am]time
Once just isn't [F]enough for my heart to [G]hear
Whoa, [C]tell it to me one more [Am]time
I can never hear [F]enough while I got ya [G]near, [E]oh
[Am]Say those [Ammaj7]words again that [Am7/G]you just did..[D].
Oh, [F]baby [G]tell it to me once [Am]again. [D]

RECORDER SOLO:
[G] [Em] [C] [D]-[B] [Em] [Emmaj7] [Em7] [Em6] [Dsus4] [D7] [Em] [A]
[D]Do that to me one more[Bm] time
Once is never [G]enough with a man like [A]you
Whoa, [D]do that to me one more [Bm]time
I can never get [G]enough of a man like [A]you, o[F#]h

[Bm]Kiss me[Bmmaj7] like [Bm7/A]you just [E]did
Oh [G]baby, [A7]do that to me once [D]again..[Bm]..
Whoa [Em]baby, [A7]do that to me once a[D]gai[Bm]n
Whoa [Em]baby, d[A7]o that to me one more t[D]ime
(Do it ag[G]ain) One more [D]time
(Do it ag[G]ain) One more [D]time
(Do it a[G]gain) One more t[D]ime
(Do it a[G]gain) One more [D]time

(Do it a[G]gain) One more [D]time
(Do it a[G]gain) One more [D]time
</pre>
</div>
<p><a class="accordion-toggle" href="#content-26"><li>The Shadow Of Your Smile - Tony Bennett | 110 BPM</a></li></p>
<div class="accordion" id="content-26">
<pre>
Em             F#m7        B7      Em     A7
The shadow of your smile, when you are gone,  
Em             Am7        D7        G    E
Will colour all my dreams and light the dawn.  


CM7          F#m7      B7       Em      Em7
Look into my eyes, my love, and see, 
Em7             F#7       C7     F#m7   B7
All the lovely things you are, to me.  


B7                 F#m7        B7      Em     Em7
Our wistful little star,   was far too high, 
Em6 [022010]          Am7       D7     Bm    E7
A teardrop kissed your lips, and so did I.  


Am7          D     Cm7  F7      Bm7       E   Em    E7
Now when I remember spring,      all the joy that love can bring,  
Am    Am7
I will be remembering,
D9   D7  D9   D7   G               [D9-2x0210]
The sha - dow of   your smile. 


B7                 F#m         B7      Em
Our wistful little star,   was far too high, 
Em6                Am        D      Dm E
A teardrop kissed your lips, and so did I.   


Am7          D     Cm7  F7      Bm7       E   Em    E7
Now when I remember spring,      all the joy that love can bring,  
Am     Am7
I will be remembering,
D9    D7  D9    D7   G         Am7    Cm7    G
The sha - dow of   your smile.  
</pre>
</div>
<p><a class="accordion-toggle" href="#content-27"><li>Till - Tony Bennett | 110 BPM</a></li></p>
<div class="accordion" id="content-27">
<pre>
Intro:  Am// F  Am

V1
C     Am           G    C   Em
Till, the moon des-erts,the sky,  
Am            C     Em  D7
Till, all the seas, run dry,
Dm7            Em       Am  Dm
Till then I'll wor-ship yo….u.

V2
Am   C          Am   Em    G7
Till the tropic sun  grows cold,
Am              G     C     F
Till this young world grows old,
G7     Em   Dm
My darling, I'll a-dore you.

Bridge:
C            Am7    C  Em
You  are  my reason to live;
Em7    Em            Dm
All  I own  I  would give
C       Am         Am7  G7
Just to have you a-dore me.

V3
C    Am          G   C  Em
Till the rivers flow upstream,
Am          C     Em Dm
Till lovers cease to dream,
Dm7           F      G7   C
Till then I'm yours, be   mine.

Interlude:     (Chords of Bridge)

C            Am7    C  Em
Em7    Em            Dm
C       Am         Am7  G7

Repeat V3
C    Am          G   C  Em
Till the rivers flow upstream,
Am          C     Em Dm
Till lovers cease to dream,
Dm7           F      G7   C
Till then I'm yours, be   mine.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-28"><li>With These Hands - Tom Jones | 110 BPM</a></li></p>
<div class="accordion" id="content-28">
<pre>
[Intro]
E     A/E    Emaj7    A/E        

[Verse 1]
E                 C#m7        A       B7
With these hands,      I will cling to you
E                 C#m7        A       B7
I’m yours forever and a day
E                 G#m7         A      G#m7   C#
With these hands,      I will bring to you
A        G#m     F#m      B
A tender love as warm as Ma…...y


[Verse 2]
E                C#m7          A        B7
With this heart,       I will sing to you,
E          C#m7                   A          G#7
Long after stars, have lost their glow.ow..ow
C#m                 Caug        E/B              F#7
And, with these hands,      I'll provide for you,
A                         A#dim                E9/B       F#7
Should there be, a stormy sea,   I'll turn the tide for you;
G#m   C#m     A      G#m  C#m   A       B          E    C7
And I'll never, oh, no, I'll never, I’ll never let you go.


[Verse 3]
F                Dm7         Bb7     C7
With this hands,      I will sing to you,
F                D7b9         Bb       A7
Long after stars, have lost their glow..ow…ow
Dm                Bm/C#            F/C          G
And, with these hands,      I'll provide for you,
Bb                       Bdim               C            G7    E/G#
Should there be, a stormy sea,  I'll turn the tide for you;
Am  Dm  Bb9          F  Dm Gm     C7       F   Bb/F   F
And I'll never, oh, no, I'll never, let you go.   (slowing)
</pre>
</div>
<p><a class="accordion-toggle" href="#content-29"><li>Once I Loved - Antônio Carlos Jobim | 110 BPM</a></li></p>
<div class="accordion" id="content-29">
<pre> 
Bm7  E9/5+  A7M   Bbo
Once I     loved
Bm7                   Co
And I gave so much to this love
C#m7
You were the world to me
Am7  D9/5+     G7M
Once   I       cried
G#m7/5b                           C#7
At the thought I was foolish and proud
F#7M      F#7
And let you say goodbye

Bm7  E9/5+   A7M   Bbo
Then one     day
Bm7                           Co
From my infinite sadness you came
C#m7
And brought me love again
Am7   D9/5+  G7M
Now   I      know
G#m7/5b                      C#7
That no matter what ever be falls
F#7M   F#7
I'll never say goodbye

B7             E7M
I will hold you close
A7        D7M
Make you stay
D#o                 Dm6
Because love is the saddest thing
F#7/C#  F#m
When it goes away
</pre>
</div>
<p><a class="accordion-toggle" href="#content-30"><li>Quizas Quizas Quizas - Buena Vista Social Club | 110 BPM</a></li></p>
<div class="accordion" id="content-30">
<pre>
[Verse 1]
D7                 Gm
Siempre que te pregunto
Cm    D      Gm
que cuando,como y donde
Cm   D    Gm
tu siempre me respondes
Eb      D       Gm
„Quizás, Quizás, Quizás“

[Verse 2]
D7               Gm
Y así pasan los días
Cm  D      Gm
y yo desesperando,
Cm  D       Gm
y tú, tú contestando
Eb      D       Gm
„Quizás, Quizás, Quizás“

[Chorus]
G                   D7
Estás perdiendo el tiempo,
G
pensando, pensando
D7
Por lo que más tú quieras
G
hasta cuando, hasta cuando

[Outro]
Eb      D       Gm
Quizás, Quizás, Quizás
Eb      D       Gm
Quizás, Quizás, Quizás
</pre>
</div>
<p><a class="accordion-toggle" href="#content-31"><li>A Whole New World - ZAYN from "Alladin" | 110 BPM</a></li></p>
<div class="accordion" id="content-31">
<pre>
[Intro]
D  D  D

[Verse]
D     D             D
I can show you the world
D         D          Bm   A
Shining, shimmering, splendid
Em       Gb7           Bm
Tell me, princess, now when did
Bm       G                 D
You last let your heart decide?

D     D           D
I can open your eyes
D        D         Bm  A
Take you wonder by wonder
Em     Gb7          Bm
Over, sideways and under
Bm     G           D
On a magic carpet ride

G             A
a whole new world
G        A         D
a new fantastic point of view
G      D
No one to tell us no
G      D
Or where to go
Bm7       E7    A7
Or say we're only dreaming

G             A
a whole new world
G          A   Bb   7 Bm
a dazzling place I never knew
-D7-          G      D
But when I'm way up here
G       D
It's crystal clear
Bm7     E7   C          A7         D
That now I'm in a whole new world with you
D      Dsus4  C         A7         D
Now I'm in a whole new world with you

F    F        F
Unbelievable sights
F     F      Dm  C
Indescribable feeling
Gm        A7              Dm
Soaring, tumbling, freewheeling
Dm          Bb              F
Through an endless diamond sky

Bb            C
a whole new world

-Don't you dare close your eyes-
Bb          C         F
a hundred thousand things to see

-Hold your breath - it gets better-
Bb       F
I'm like a shooting star
Bb     F
I've come so far
Dm7      G7      C7
I can't go back to where I used to be

Bb               C
a whole new world

-Every turn a surprise-
Bb           C   D      Dm
With new horizons to pursue

-Every moment red-letter-
F7              Bb   F
I'll chase them anywhere
Bb       F
There's time to spare
Dm7      G7        Eb         C7         F
Let me share this whole new world with you

Bb        C
a whole new world
Bb        C
That's where we'll be
Bb        C
a thrilling chase
Bb           C
a wonderous place
-C7-     F
For you and me
</pre>
</div>
<p><a class="accordion-toggle" href="#content-32"><li>Close To You - Carpenters | 110 BPM</a></li></p>
<div class="accordion" id="content-32">
<pre>
#1.
Ab               G7sus
Why do birds suddenly appear,
G7    Gm7          Cm7
every time you are near?
Ab
Just like me, they long to be
Eb6
close to you.

#2.
Ab                       G7sus
Why do stars fall down from the sky,
G7    Gm7           Cm7
every time you walk by?
Ab                             Eb6      EbM7 EbM6 EbM7
Just like me, they long to be, close to you.

CHORUS:
Ab
On the day that you were born,
        Gm
the angels got together and decided to 
C9
create a dream come true.
C7       Ab
So, they sprinkled moon dust 
AbM7
in your hair of gold and starlight
Ab6             Bb
in your eyes of blue.

#3.
Bb      Ab                  G7
That is why all the boys in town,
Gm7      Cm7
follow you all around.
Ab                             Eb6      EbM7 Eb6 EbM7
Just like me, they long to be, close to you. 

CHORUS:

REPEAT #3.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-33"><li>Stand By Me - John Lennon | 110 BPM</a></li></p>
<div class="accordion" id="content-33">
<pre>
[Intro]

| G | % | Em | % | C | D | G | % |


[Verse]

G             Em
When the night has come and the land is dark
C           D                G
And the moon is the only light we'll see
G                        Em
No I won't be afraid, no I, I won't be afraid
C           D               G
Just as long as you stand, stand by me


[Chorus]

G
And darling, darling, stand by me
Em
Oh nah, nah, stand by me
C            D         G
Stand by me, stand by me


[Verse]

G                   Em
If the sky that we look upon should tumble and fall
C                D              G
and the mountains should crumble to the sea
G                          Em
I won't cry. I won't cry,  no I, I won't shed a tear
C           D               G
Just as long as you stand, stand by me 


[Chorus]

G
And darling, darling, stand by me
Em
Oh nah, nah, stand by me
C            D            G
Stand by me, stand by me, stand by me-ee yeah


[Instrumental]

| G | % | Em | % | C | D | G | % |
| G | % | Em | % | C | D | G | % |


[Chorus]

                G
Whenever you're in trouble won't you stand by me
Em
Oh nah, nah, stand by me
C            D            G
Oh, stand by me, stand by me, stand by me

G
Darling, darling, stand by me - hee
Em
Stand by me
C            D            G       (fade out)
Oh, stand by me, stand by me, stand by me - hee, hee
</pre>
</div>
<p><a class="accordion-toggle" href="#content-34"><li>This Masquerade - Carpenters | 110 BPM</a></li></p>
<div class="accordion" id="content-34">
<pre>
A7 x02020
Am7 x02010
A/C# x3222x
C9  x32333
B x24442
B7 x21202
Cmaj7 x32000
Dm7 xx0211
Em 022000
Em7/D xx0000
EmMaj7/D# xx1000
Em7/C x3x000
Em7/C# x4x000
G 320003
Gm7 353333
G/B x20003


[Intro]

Em  Em7/D  Em7/C  Em7/C#
Gm7  B7  Em  A7  Em  A7


[Verse 1]

Em            EmMaj7/D#
Are we really   happy   with
Em7/D           A7
This lonely game we play
Em              C9          B7
Looking for the right words to say
Em                EmMaj7/D#
Searching but not finding
Em7/D     A7
Understanding anyway
C9          B7      Em
We're lost in this masquerade


[Chorus]

Dm7             G                Cmaj7  Am7
Both afraid to say we're just too far away
Dm7           G     Bb      Cmaj7
From being close together from the start
A/C#               F#
We tried to talk it over
B
But the words got in the way
A7    F#          B
We're lost inside this lonely game we play


[Verse 2]

Em                   EmMaj7/D#
Thoughts of leaving disappear
Em7/D            A7
Each time I see your eyes
Em            C9         B7
And no matter how hard I try
Em                EmMaj7/D#
To understand the reason
Em7/D          A7
Why we carry on this way
C9               B7     Em  A7  Em  A7
And we're lost in this masquerade


[Interlude]

Em  EmMaj7/D#  Em7/D  A7  Em  C9  B7
Em  EmMaj7/D#  Em7/D  A7  C9  B7  Em
Dm7  G  Cmaj7  Am7
Dm7  G  Bb   Cmaj7


[Chorus Ending]

A/C#               F#
We tried to talk it over
B
But the words got in the way
A7    F#          B
We're lost inside this lonely game we play


[Verse 3]

Em                   EmMaj7/D#
Thoughts of leaving disappear
Em7/D            A7
Each time I see your eyes
Em            C9         B7
And no matter how hard I try
Em         EmMaj7/D#
To understand the reason
Em7/D         A7
Why we carry on this way
C9            B7     Em  Em7/D
We're lost in a masquerade
Cmaj7     B7      Em
We’re lost in a mas - querade


[Coda]

Em  Em7/D  Em7/C  Em7/C#

Gm7       B7      Em
And we’re lost in a mas - querade
A7  Em  A7  Em  A7  Em
(ending with flute solo) fading…
</pre>
</div>
<p><a class="accordion-toggle" href="#content-35"><li>Yesterday Once More - Carpenters | 110 BPM</a></li></p>
<div class="accordion" id="content-35">
<pre>
E                       Emaj7
When I was young I’d listen to the radio
C#m                     C#m7
Waitin’ for my favorite songs
Amaj7                   B      C#m7
When they played I’d sing along
A               B      B7
It made me smile

E                       Emaj7
Those were such happy times, and not so long ago
C#m                     C#m7
How I wondered where they’d gone
Cm
But they’re back again
C#m7
Just like a long lost friend
Amaj7           B7
All the songs I loved so well


[Chorus]

E                       C#m7
Every sha-la-la-la, every wo-wo-wo
E
Still shines
E                       C#m7
Every shing-a-ling-a-ling, that they’re starting to sing’s
A                       B7
So fine


[Post-Chorus]

Cm                              Gm7
When they get to the part, where he’s breakin’ her heart
A                       Am5
It can really make me cry
E                       A
Just like before
E
It’s yesterday once more


[Verse]

E                       Emaj7
Lookin’ back on how it was, in years gone by
C#m                     C#m7
And the good times that I had
Amaj7                   B      C#m7
Makes today seem rather sad
A               B      B7
So much has changed

E                       Emaj7
It was songs of love that I would sing to then
C#m                     C#m7
And I’d memorize each word
C#m
Those old melodies
C#m7
Still sound so good to me
Amaj7           B7
As they melt the years away
</pre>
</div>
<p><a class="accordion-toggle" href="#content-36"><li>How Deep Is Your Love - Bee Gees | 110 BPM</a></li></p>
<div class="accordion" id="content-36">
<pre>
[Intro]
| Eb | Ebmaj7 | Abmaj7 | Abmaj7/Bb |
| Eb | Ebmaj7 | Abmaj7 | Abmaj7/Bb |


[Verse 1]
Eb          Gm7     Fm7
I know your eyes in the morning sun
C7         Fm7             G7      Abmaj7/Bb
I feel you touch me in the pouring rain
Eb              Gm7    Cm7
And the moment that you wander far from me
Fm7                  Abmaj7/Bb
I wanna feel you in my arms again


[Bridge]
Abmaj7          Gm7
And you come to me on a summer breeze
Fm7                         Db9
Keep me warm in your love, then you softly leave
Gm7            Abmaj7/Bb              [ Eb ]
And it's me you need to show, how deep is your love?
                        (How deep is your love? ...)

[Chorus]
Eb                     Ebmaj7
How deep is your love? How deep is your love?
Abmaj7           Abm6
I really mean to learn
Eb                   Db6                C7
'Cause we're living in a world of fools, breaking us down
C7                Fm7      Abm6          [ Eb ]
When they all should let us be, we belong to you and me


[Verse 2]
Eb   Gm7      Fm7
I believe in you
C7           Fm7        G7   Abmaj7/Bb
You know the door to my very soul
Eb          Gm7     Cm7
You're the light in my deepest darkest hour
Fm7            Abmaj7/Bb
You're my saviour when I fall


[Bridge]
Abmaj7          Gm7
And you may not think I care for you
Fm7                     Db9
When you know down inside that I really do
Gm7            Abmaj7/Bb              [ Eb ]
And it's me you need to show, how deep is your love?
                        (How deep is your love? ...)

[Chorus]
Eb                     Ebmaj7
How deep is your love? How deep is your love?
Abmaj7           Abm6
I really mean to learn
Eb                   Db6                C7
'Cause we're living in a world of fools, breaking us down
C7                Fm7      Abm6           [ Eb ]
When they all should let us be, we belong to you and me


[Verse] scat vocals
| Eb Gm7 | Fm7 C7 | Fm7 G7 | Abmaj7/Bb |
| Eb Gm7 | Cm7 | Fm7 | Abmaj7/Bb |


[Bridge]
Abmaj7          Gm7
And you come to me on a summer breeze
Fm7                         Db9
Keep me warm in your love, then you softly leave
Gm7            Abmaj7/Bb             [ Eb ]
And it's me you need to show, how deep is your love?
                        (How deep is your love? ...)

[Chorus]
Eb                     Ebmaj7
How deep is your love? How deep is your love?
Abmaj7           Abm6
I really mean to learn
Eb                   Db6                C7
'Cause we're living in a world of fools, breaking us down
C7                Fm7      Abm6           | Eb Gm7 | Abmaj7/Bb | % |
When they all should let us be, we belong to you and me


[Chorus]
Eb                     Ebmaj7
How deep is your love? How deep is your love?
Abmaj7           Abm6
I really mean to learn
Eb                   Db6                C7
'Cause we're living in a world of fools, breaking us down
C7                Fm7      Abm6           | Eb Gm7 | Abmaj7/Bb | % |
When they all should let us be, we belong to you and me

(repeat and fade)
</pre>
</div>
<p><a class="accordion-toggle" href="#content-16"><li>Just The Way You Are - Billy Joel | 110 BPM</a></li></p>
<div class="accordion" id="content-16">
<pre>
[Intro]

Gm6/D  G/D  D
Gm6/D  G/D  D


[Verse 1]

D         Bm6     Gmaj7      Bm  D7  Gmaj7      Gm            D/F#
Don't go changin'  to try please me  you never let me down before
Am7  D7  Gmaj7      Gm    D/F#             Bm7
Mm         Don't imagine  you're too familiar
E7sus4                  E7       G/A
And I don't see you anymore


[Refrain 1]

D           Bm6     Gmaj7          Bm      D7
I would not leave you   in times of trouble
Gmaj7      Gm                   D/F#
we never could have come this far
Am7  D7  Gmaj7         Gm          D/F#             Bm7
Mm         I took the good times  I'll take the bad times
Em7             G/A               Gm6/D  G/D  D  Gm6/D  G/D  D
I'll take you just the way you are


[Verse 2]

D           Bm6   Gmaj7       Bm     D7
Don't go trying   some new fashion
Gmaj7                Gm            D
Don't change the colour of your hair
Am7  D7  Gmaj7         Gm       D/F#            Bm7
Mm         You always have my   unspoken passion
E7sus4            E7            G/A
Although I might not seem so care


[Refrain 2]

D             Bm6     Gmaj7 Bm  D7    Gmaj7  Gm               D/F#
I don't want clever  conversation  I never want to work that hard
Am7  D7  Gmaj7          Gm       D/F#            Bm7
Mm         I just want someone    that I can talk to
Em7       G/A                   Gm6/D  G/D  D  Gm6/D  G/D  D
I'll want you just the way you are


[Bridge]

G            A                  F#m7    B7
I need to know that you will always   be
Em              A                D  D/C
the same old someone that I knew
Bb            C               Am      D7
What will it take till you believe in me
Gm            C               G/A
The way that I believe in you


[Refrain 3]

D        Bm6     Gmaj7         Bm     D7
I said I love you   &  that's forever
Gmaj7       Gm                D/F#
and this I promise from the heart
Am7  D7  Gmaj7           Gm        D/F#       Bm7
Mm          I could not love you     any better
Em7               G/A               Gm6/D  G/D  D  Gm6/D  G/D  D
I'll love  you just the way you are

[Solo]

D Bm6 Gmaj7 Bm D7 Gmaj7 Gm D/F# Am7 D7 Gmaj7 Gm D/F# Bm7 E7sus4 E7 G/A

[Refrain 2]

D             Bm6     Gmaj7 Bm  D7    Gmaj7  Gm               D/F#
I don't want clever  conversation  I never want to work that hard
Am7  D7  Gmaj7         Gm        D/F#               Bm
Mm        I just want someone        that I can talk to
Em7                A7sus4             Bb  C Am  D7 Gm Asus4
I'll want you just the way you are

[Outro]

D  Bm6  Gmaj7  Bm D7 Gmaj7  Gm  D/F#  Am7 D7 Gmaj7  Gm  D/F#  Bm7 E7sus4 E7 G/A  (Repeat to fade)
</pre>
</div>
<p><a class="accordion-toggle" href="#content-17"><li>Days Of Wine And Roses - Andy Williams | 110 BPM</a></li></p>
<div class="accordion" id="content-17">
<pre>
[Intro] F

[Verse 1]
F    Eb7         D7   D7sus D7        Gm
The days of wine and roses......laugh and run 
Bbm6                    Am7
away, like a child at play, through a meadow 
Dm7              Gm7
land toward a closing door.
Em7-5      A7   Dm7
A door marked, nevermore, that wasn't 
G7      Gm7   C7 C7+5
there before.

[Bridge]
F   Eb7         D7     D7sus  D7     Gm
The lonely night discloses........just a passing 
Bbm6             Am7
breeze filled with memories, of the golden 
Dm7           Bm7-5   E7      Am7
smile that introduced me to..........the days of 
Dm7      Gm7   C7  F   Bm7-5  E7
wine and roses and you.

[Outro]
F   Eb7         D7      D7sus  D7     Gm
(The lonely night discloses)........just a passing 
Bbm6             Am7
breeze filled with memories, of the golden 
Dm7           Bm7-5   E7      Am7
smile that introduced me to..........the days of 
Dm7      Gm7   C7  F   Bm7-5  E7 F
wine and roses and you.
</pre>
</div>
<p><a class="accordion-toggle" href="#content-37"><li>Cool Change - Little River Band | 120 BPM</a></li></p>
<div class="accordion" id="content-37">
<pre>
[Intro]
(piano w/bass and acoustic guitar)
A                G/A
D/A              A/C# D    D/E

[Verse 1]
(w/piano, bass, and acoustic guitar)
        A
If there's one thing in my life that's missing
G
It's the time that I spend alone
D/F#                                   A
Sailing on the cool and bright clear water

A
There's lots of those friendly people
G
They're showing me ways to go
D/F#                            A
But I never want to lose their inspiration

[Chorus]
(w/piano, bass, and acoustic guitar 1st time)
D    A
Time for
D     A
Cool change
D                 A
I know that it's time
E        A
For a cool    change

D           A
And now that my life
D           A
Is so prearranged
D                 A
I know that it's time for a
E
Cool change

(1 (w/full band):  D/E  E)

[Verse 2]
A
Well, I was born in the sign of water
G
And it's there that I feel my best
D/F#                                       A
The albatross and the whales they are my brothers

A
It's kind of a special feeling
G
When you're out on the sea alone
D/F#                           A
Staring at the full moon like a lover

[Chorus]
(w/piano, bass, and acoustic guitar 1st time)
D    A
Time for
D     A
Cool change
D                 A
I know that it's time
E        A
For a cool    change

D           A
And now that my life
D           A
Is so prearranged
D                 A
I know that it's time for a
E
Cool change

[Bridge]
C
I've never been romantic
A
And sometimes I don't care
C
I know it may sound selfish
E                     A
But let me breathe the air

[Sax Solo]
(verse chords; end on A/C# D D/E as per intro)

[Verse 3]
(composite of first two verses)
(w/piano)
        A
If there's one thing in my life that's missing
G
It's the time that I spend alone
D                                     A  D D/E
Sailing on the cool and bright clear water

(bass, acoustic guitar, and strings enter)

A
It's kind of a special feeling
G
Out on the sea alone
D/F#                            A
Staring at the full moon like a lover

[Chorus]
(w/piano, bass, and acoustic guitar 1st time)
D    A
Time for
D     A
Cool change
D                 A
I know that it's time
E        A
For a cool    change

D           A
And now that my life
D           A
Is so prearranged
D                 A
I know that it's time for a
E
Cool change

(1 (w/full band):  D/E  E)

(continue w/strings & sax to fade)
</pre>
</div>
<p><a class="accordion-toggle" href="#content-38"><li>New Kid In Town - Eagles | 107 BPM</a></li></p>
<div class="accordion" id="content-38">
<pre>
[Intro]

E   E   F#m B   F#m B   A   B   E   E


[Verse 1]

E                      E                  F#m B   F#m B
There's talk on the street, it sounds so familiar;
A          B                      E         E
great expectations, ev'rybody's watchin' you.
E            E                   F#m  B    F#m7 B
People you meet they all seem to know you,
A           B                               E              G#sus4 G#7
even your old friends treat you like you're somethin' new.


[Chorus]

C#m           F#
Johnny come lately,
C#m             F#
the new kid in town.
C#m        F#
Ev'rybody loves you,
F#m                B7
so don't let them down.


[Verse 2]

E                E                F#m     B     F#m B
You look in her eyes, the music begins to play,
A          B                    E     E
hopeless romantics, here we go again.
E             E                             F#m   B    F#m7 B
But after a while you're lookin' the other way,
A        B                E     G#sus4 G#7
it's those restless hearts that never mend.


[Chorus]

C#m           F#
Johnny come lately,
C#m             F#
the new kid in town.
C#m             F#
Will she still love you
F#m7             B7
when you're not around?


[Bridge]

E   E   B   B   A   B   E   A E F#m E

B7                B7                   E         E
There's so many things you should have told her,
B7               B7                    C#m
but night after night you're willing to hold her,
F#7       Am7           Am7/D   D
just hold her, tears on your shoul - der.


[Verse 3]

G                   G                       Am7  D    Am7 D
There's talk on the street, it's there to remind you.
C              D             G          G
Doesn't really matter which side you're on.
G               G                        Am7  D    D7
You're walkin' away and they're talkin' behind you,
C                     D                   G     B7
they will never forget you 'til somebody new comes along.


[Chorus]

Em7                A
Where've you been lately?
Em7                   A
There's a new kid in town.
Em7        A
Ev'rybody loves him (don't they?)
Am7                  B7                    E   G#m7   A
And he's holdin' her and you're still around.


[Outro]

B7                   E   G#m7   A
There's a new kid in town,
B7                      E   G#m7   A   Am7
just another new kid in town.
E         E                             C#m             C#m
(Ooh-hooh) Ev'rybody's talkin' 'bout the new kid in town.
E         E                            C#m             C#m
(Ooh-hooh) Ev'rybody's walkin' like the new kid in town. 

[Outro] 
E                 E
There's a new kid in town, (I don't want to hear it)
C#m               C#m
There's a new kid in town, (I don't want to hear it)
</pre>
</div> 
<p><a class="accordion-toggle" href="#content-8a"><li>Can't Help Fall In Love - Elvis Presley | 100 BPM</a></li></p>
<div class="accordion" id="content-8a"> 
<pre> 
[Intro]
C G Am C G 

C    Em  Am        F     C    G

Wise men say, only fools rush in

F G     Am   F *        C    G    C

But I can't help falling in love with you 

C     Em Am             F  C G

Shall I  stay, would it be a sin?

F G     Am   F *        C    G    C

If I can't help falling in love with you 

[Chorus] 

Em           B7    Em            B7

Like a river flows surely to the sea

Em            B7

Darling so it goes

Em           A7            Dm  G

Some things  are  meant to be 

[Verse 2] 

C    Em Am            F     C    G

Take my hand, take my whole life too

F G     Am   F          C    G    C

For I can't help falling in love with you 

[Chorus] 

Em           B7    Em            B7

Like a river flows surely to the sea

Em            B7

Darling so it goes

Em           A7            Dm  G

Some things  are  meant to be 

[Verse 3] 

C    Em Am            F     C    G

Take my hand, take my whole life too

F G     Am   F          C    G    C

For I can't help falling in love with you

F G     Am   F          C    G    C

For I can't help falling in love with you
</pre>
</div>
<!-- End of Songhits List -->
</ul>
<br>
<!-- Beginning of Backtrack -->
<h3>Hotel California - Eagles - Backtrack</h3>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/8x26sdlQzbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h3>Highway Star - Deep Purple - Backtrack</h3>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/0hAOXM-YzAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>
<h3>Flordeluna - Santana - Backtrack</h3>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/eVHsvYcJ9ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>
<h3>Take It Easy - Eagles - Backtrack</h3>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/BRGt6p0oUSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h3>Till There Was You - Beatles - Backtrack</h3>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/wGCXzUxjips" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h3>Temple Of The King- Rainbow - Backtrack</h3>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/5Yl40QrBfms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h3>Just The Two Of Us - Grover Washington - Backtrack</h3>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/bGh4Qvd_KVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h3>Something - Beatles - Backtrack</h3>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/axmc0PyGXHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>        
<!-- End of Backtrack -->
<br>    

<!-- Scripts -->
<script>
/**
* Simple expand/collapse
*/
// document.addEventListener('click', function (event) {
// 	// Only run if the clicked link was an accordion toggle
// 	if ( !event.target.classList.contains('accordion-toggle') ) return;
// 	// Get the target content
// 	var content = document.querySelector(event.target.hash);
// 	if ( !content ) return;
// // Prevent default link behavior
// event.preventDefault();
// 	// Expand/collapse the content area
// 	content.classList.toggle('active');
// }, false);
/**
* Accordion functionality
*/
// Add your JavaScript here...
document.addEventListener('click', function (event) {

// Only run if the clicked link was an accordion toggle
if ( !event.target.classList.contains('accordion-toggle') ) return;

// Get the target content
var content = document.querySelector(event.target.hash);
if ( !content ) return;

// Prevent default link behavior
event.preventDefault();

// If the content is already expanded, collapse it and quit
if ( content.classList.contains('active') ) {
content.classList.remove('active');
return;
}

// Get all accordion content, loop through it, and close it
var accordions = document.querySelectorAll('.accordion');
for (var i = 0; i < accordions.length; i++) {
accordions[i].classList.remove('active');
}

// Open our target content area
content.classList.add('active');

}, false);
</script>
<!--BACK TO TOP FUNCTIONALITY - JQUERY - START--->
<!-- jQuery CDN -->
<script
src="https://code.jquery.com/jquery-1.12.0.min.js">
</script>
<!-- Bootstrap Js CDN -->
<script
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">
</script>
<script type="text/javascript">
$(document).ready(function()
{
$('#sidebarCollapse').on('click', function()
{
$('#sidebar').toggleClass('active');
});
});
</script>
<!--BACK TO TOP FUNCTIONALITY - JQUERY - END--->
<!-- BACK TO TOP FUNCTINALITY - start-->
<script>
//Get the button
var mybutton = document.getElementById("myBtn");        
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};        
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}        
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
</script>
<!-- BACK TO TOP FUNCTINALITY - end-->

<!-- SEARCH FUNCTINALITY - START-->
<script>
function myFunction() {
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
a = li[i].getElementsByTagName("a")[0];
txtValue = a.textContent || a.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
} else {
        li[i].style.display = "none";
}
}
}
</script>
<!-- SEARCH FUNCTINALITY - END-->

    </main>
  );
}

export default App;
