import React, { useState } from 'react';

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
  return (
      <div>         
          <center><h2>Simply Jessie</h2></center>
          <h2><pre> {simpleJessie} </pre></h2>
          <center><h2>Tequila Sunrise</h2></center>
          <h2><pre> {tequilaSunrise} </pre></h2>
      </div>
  )
};

export default Header;
