import React, { useState } from 'react';

    const backgroundColorStyle = {
      backgroundColor: 'lightgray', // Change 'blue' to the color you want
    };

    const Header = () => {

    var simpleJessie = String.raw`
    [Intro]
    GM7 ? CM7 - ; ( 4x )
     
    [Verse]
               GM7                      CM7
    And I don?t know how I knew it
     
              GM7            CM7
    But I knew it somehow,
     
                       Am7   D7sus,D7    GM7      CM7
    You?re the answer       to the     question
     
            Am7                  D7sus-D7-
    No one?s answered till now.
     
    [Refrain]
                CM7                        G/B
    And I don?t know what you see
     
    Am7                    G
    What you see in me,
     
           CM7               G/B
    But, girl it?s nothin? to
     
    A7sus    A7        D7(or D9)- D7sus
    What I see      in you.
     
                     GM7              CM7
    Stars that glisten, lips for kissin?
     
             GM7                  CM7
    Honey,      listen, it?s true,
     
                 Am7  D7sus, D7             GM7   CM7
    No one ever               loved you   better
     
                    Am7   D7sus-D7
    I love ya, honey.
     
    [Ad lib]
    (1st verse chords)
     
    [Refrain]
                    CM7               G/B
    And I?ve known a girl or two
     
           Am7                       G
    But none of them was you
     
          CM7                   G/B
    And they could never be
     
    A7sus          A7       D7sus- Eb7sus-
    What you are       to me.
     
    [Verse 2]
    (Repeat 2nd  stanza, except last 2 chords, moving chords one fret (AbM7) higher)
     
    [Coda]
     
    Eb7sus pause   (chord pattern AbM7- DbM7-)
    I love you, um-hmmmmmm
    I love you, oh-hohhh,
    I love you
    I love you, um-hmmmmmm
     
                   AbM7 (or AbM9)
    I love you.
    -------------------------------------------------------------------
    `;
    var tequilaSunrise = String.raw`
    [Intro]
    G  G6  G  G6  G  G6  G  G6
    Am     D7     G  G6  G  G6
    
    [Verse 1]
    G       G6       G      G6
      It's another tequila sunrise
    D                            Am
      Starin' slowly 'cross the sky
    D7         G  G6  G  G6
      Said goodbye
    G  G6            G      G6
      He was just a hired hand
    D                                      Am
      Workin' on the dreams he planned to try
    D7             G  G6  G  G6
      The days go by
    
    [Chorus]
    Em                      C
      Every night when the sun goes down
    Em              C
      Just another lonely boy in town
    Em     Am                 D7
      and she's out runnin' round
    
    [Verse 2]
    G     G6           G       G6
      She wasn't just another woman
    D                                  Am
      And I couldn't keep from comin' on
    D7              G  G6  G  G6
      It's been so long
    G  G6            G       G6
      Oh, and it's a hollow feelin'
    D                               Am
      When it comes down to dealin' friends
    D7          G  G6  G  G6
      It never ends
    
    [Solo]
    G  G6  G  G6
    D      D
    Am     D7
    G  G6  G  G6
    
    [Bridge]
    Am              D
      Take another shot of courage
    Bm                E                 Am   B7
      Wonder why the right words never co - ome
                Em7    A7
    You just get numb
    
    [Verse 3]
    G       G6       G      G6
      It's another tequila sunrise
    D                                 Am
      This old world still looks the same
    D7          G  G6  G  G6
      Another frame
    
    [Outro]
    G  G6  G  G6
    G  G6  G  G6  G
    -------------------------------------------------------------------
    `;
    var takeiteasy = String.raw`
    [Intro]
    G       C/G  Am/G
    G       C/G  Am/G
    
    [Verse]
    G                   G
            Well, I'm a runnin' down the road, tryin' to loosen my load,
                        D     C
    I've got seven women on my mind.
    G                       D
    Four that wanna own me, two that wanna stone me,
    C                         G
    one says she's a friend of mine. 
            Em            C    G
    Take it easy, take it ea - sy, 
                  Am                C                Em
    don't let the sound of your own wheels drive you crazy. 
            C                   G              C            G
    Lighten up while you still can, don't even try to under-stand, 
                Am                 C                 G
    just find a place to make your stand and take it easy. 
                G
    Well, I'm a standin' on a corner in Winslow, Arizona 
                    D        C
    and such a fine sight to see: 
          G                   D
    it's a girl, my Lord, in a flat bed Ford 
            C                      G
    slowin' down to take a look at me. 
            Em   D             C     G
    Come on, ba - by, don't say may - be. 
            Am                 C             Em
    I gotta know if your sweet love is gonna save me. 
          C               G                  C               G
    We may lose and we may win though we will never be here a-gain. 
            Am               C              G
    So open up, I'm climbin' in, so take it easy. 
    
    [Solo Сhords]
    G            D  C
    G       D       C       G
    Em      D       C       G
    Am      C       Em         D
    
    [Verse]
                G
    Well, I'm a runnin' down the road, tryin' to loosen my load, 
                          D     Am7
    got a world of trouble on my mind. 
    G                       D
    Lookin' for a lover who won't blow my cover, 
          C          G
    she's so hard to find. 
            Em            C    G
    Take it easy, take it ea - sy, 
                  Am                C                Em
    don't let the sound of your own wheels drive you crazy. 
            C    G             C     G
    Come on, ba - by, don't say may - be. 
            Am                 C             G
    I gotta know if your sweet love is gonna saaaaaave me. 
    
    [Bridge]
    C            C             G             G
    oooo oo oo   oooo oo oo    oooo oo oo    oooo oo oo
    C            C            G             G
    oooo oo oo   ooo oo oo    oooo oo oo    oooo oo oo   
    C            C                        G         Dm7/G   C
    oooo oo oo   ooo oo oo  Oh, we got it eeea   ea-ea     -sy, 
    C                    G         Dm7/G    C       Em .........
    we ought  to take it eeea   ea-ea      -sy,                   
    `;
    var tilltherewasyou = String.raw`
    [Intro]
 
F B7-9 Gm C7-9 (x2)
 
 
[Verse 1]
 
F                     B7-9
There were bells on a hill...
      Gm               Bbm
but I never heard them ringing.
      F     Am    Abm     Gm
No, I never heard them at all...
C7-9           F   Gm C7-9
till there was you.
 
 
[Verse 2]
 
C7-9       F            B7-9
There were birds in the sky...
      Gm             Bbm
but I never saw them winging.
      F     Am  Abm     Gm
No, I never saw them at all...
C7-9           F   B7-9
till there was you.
 
 
[Chorus]
 
B7-9           Bb     Bbm           F
Then there was music..and wonderful roses...
     D           Gm     Gm7      G7
they tell me, in sweet, fragrant meadows
   C7        C7-9
of dawn, and dew.
 
 
[Verse 3]
 
C7-9      F        B7-9
There was love all around...
      Gm             Bbm
but I never heard it singing.
      F     Am    Abm   Gm
No, I never heard it at all...
C7-9           F  Gm B7-9
till there was you.
 
 
[Interlude]
 
C7-9   F    B7-9   Gm    Bbm
 
F     Am    Abm   Gm  C7-9     F  Gm B7-9
 
 
[Chorus]
 
B7-9           Bb     Bbm           F
Then there was music..and wonderful roses...
     D           Gm     Gm7      G7
they tell me, in sweet, fragrant meadows
   C7        C7-9
of dawn, and dew.
 
 
[Verse 4]
 
C7-9      F        B7-9
There was love all around...
      Gm             Bbm
but I never heard it singing.
      F     Am    Abm   Gm
No, I never heard it at all...
C7-9           F
till there was you.
 
 
[Outro]
 
C7 E  C7           F   C#  F F7+
ti....ll there was you.....
    `;
  return (
      <div style={backgroundColorStyle}>   
          
          <center><h2>Take It Easy</h2></center>
          <h2><pre> {takeiteasy} </pre></h2>          
          <center><h2>Tequila Sunrise</h2></center>
          <h2><pre> {tequilaSunrise} </pre></h2>
          <center><h2>Till There Was You</h2></center>
          <h2><pre> {tilltherewasyou} </pre></h2>
          <center><h2>Simply Jessie</h2></center>
          <h2><pre> {simpleJessie} </pre></h2>
      </div>
  )
};

export default Header;
