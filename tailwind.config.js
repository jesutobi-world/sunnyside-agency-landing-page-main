/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'softRed': 'hsl(7, 99%, 70%)',
        'transparentSoftRed':'hsla(7, 99%, 70%, 0.4)',
        'yellow': 'hsl(51, 100%, 49%)',
        'transparentYellow': 'hsla(51, 100%, 49%, 0.4)',
        'darkSaturatedCyan':'hsl(167, 40%, 24%)',
        'darkBlue': 'hsl(198, 62%, 26%)',
        'darkModerateCyan':'hsl(168, 34%, 41%)',
        'veryDarkDesaturatedBlue':'  hsl(212, 27%, 19%)',
        'veryDarkGrayishBlue':' hsl(213, 9%, 39%)',
        'darkGrayishBlue':'hsl(232, 10%, 55%)',
        'grayishBlue':'hsl(210, 4%, 67%)',
      },
      backgroundImage: {
        'desktopHeader':'url(./images/desktop/image-header.jpg)',
        'desktopTransform':'url(./images/desktop/image-transform.jpg)',
        'desktopStandOut':'url(./images/desktop/image-stand-out.jpg)',
        'desktopGraphicDesign':'url(./images/desktop/image-graphic-design.jpg)',
        'desktopPhotography':'url(./images/desktop/image-photography.jpg)',
        'desktopMilkbottles':'url(./images/desktop/image-gallery-milkbottles.jpg)',
        'desktopOrange':'url(./images/desktop/image-gallery-orange.jpg)',
        'desktopCone':'url(./images/desktop/image-gallery-cone.jpg)',
        'desktopSugarCubes':'url(./images/desktop/image-gallery-sugarcubes.jpg)',
      },
      fontFamily:{
        'barlow':['Barlow'],
        'fraunces':['Fraunces'],
      }
    },
  },
  plugins: [],
}