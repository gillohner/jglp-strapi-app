import '../../styles/main.scss';
import './logo.scss';
import React from "react";

export default function Logo() {
  return (
    <div className='logo' width='100px'>
      <img alt='JGLP CH Logo' src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 847.99 418.25'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23119cd4; %7D .cls-2 %7B fill: %23fff; %7D .cls-3 %7B fill: %23010909; %7D .cls-4 %7B fill: %23b4dc00; %7D %3C/style%3E%3C/defs%3E%3Ctitle%3ESchweiz%3C/title%3E%3Cg id='Ebene_2' data-name='Ebene 2'%3E%3Cg id='Ebene_1-2' data-name='Ebene 1'%3E%3Cpolygon class='cls-1' points='451.7 294.6 451.7 418.25 847.99 348.32 847.99 224.67 451.7 294.6' /%3E%3Cpath class='cls-2' d='M494.43,331.56c0,2,.55,3.44,1.65,4.31a30.1,30.1,0,0,0,5.24,3.08l12.6,6.18a18.54,18.54,0,0,1,4.47,2.76,11.16,11.16,0,0,1,2.61,3.39,13,13,0,0,1,1.26,4.43,51.16,51.16,0,0,1,.3,6,24.44,24.44,0,0,1-1.46,8.6,20.69,20.69,0,0,1-4.12,6.83,23.15,23.15,0,0,1-6.4,4.88,28,28,0,0,1-8.2,2.74,23.74,23.74,0,0,1-7.95.15,14.21,14.21,0,0,1-6.35-2.58,13,13,0,0,1-4.17-5.36,20,20,0,0,1-1.51-8.18v-4.1a3.24,3.24,0,0,1,.83-2.1,3.3,3.3,0,0,1,2-1.2l6.2-1.1a2.35,2.35,0,0,1,2,.5,2.29,2.29,0,0,1,.83,1.81v4.1a7.86,7.86,0,0,0,2.23,5.95,6.38,6.38,0,0,0,5.91,1.51,9.26,9.26,0,0,0,6.11-3.43,11.13,11.13,0,0,0,2-6.9v-1.5c0-2.07-.5-3.52-1.5-4.34a22.19,22.19,0,0,0-4-2.49l-15.32-7.6a11,11,0,0,1-5.87-6.26,25.25,25.25,0,0,1-1.41-8.35q0-9.51,5.48-15.77a24.44,24.44,0,0,1,14.7-7.89,23.57,23.57,0,0,1,8-.16,14.44,14.44,0,0,1,6.3,2.58,13.2,13.2,0,0,1,4.17,5.37,20.16,20.16,0,0,1,1.51,8.19v2.19a3.24,3.24,0,0,1-.83,2.1,3.3,3.3,0,0,1-2,1.2l-6.2,1.1a2.32,2.32,0,0,1-2-.5,2.27,2.27,0,0,1-.83-1.81v-2.2a8.49,8.49,0,0,0-2-6q-2-2.19-6.11-1.47a9.29,9.29,0,0,0-6.11,3.42,11.18,11.18,0,0,0-2,6.91Z' /%3E%3Cpath class='cls-2' d='M558.83,319.21a7.91,7.91,0,0,0-2.23-6,6.49,6.49,0,0,0-5.92-1.45,9.12,9.12,0,0,0-5.91,3.59,10.84,10.84,0,0,0-2.23,6.74v36.1a7.85,7.85,0,0,0,2.23,6,6.5,6.5,0,0,0,5.91,1.46,9.21,9.21,0,0,0,5.92-3.6,10.9,10.9,0,0,0,2.23-6.74v-1.7a3.26,3.26,0,0,1,.82-2.1,3.32,3.32,0,0,1,2-1.2l6.21-1.09a2.32,2.32,0,0,1,2.81,2.3v1.7a23.37,23.37,0,0,1-1.55,8.63,21.85,21.85,0,0,1-4.27,6.85,24,24,0,0,1-6.35,4.87,26.28,26.28,0,0,1-7.81,2.68,22.09,22.09,0,0,1-7.81.07,15.23,15.23,0,0,1-6.35-2.63,13.29,13.29,0,0,1-4.27-5.35,19.27,19.27,0,0,1-1.55-8.07v-36.1a23.4,23.4,0,0,1,1.55-8.63,22,22,0,0,1,4.27-6.85,24.23,24.23,0,0,1,6.35-4.87,26.26,26.26,0,0,1,7.81-2.67,22.1,22.1,0,0,1,7.81-.08,15.37,15.37,0,0,1,6.35,2.63,13.36,13.36,0,0,1,4.27,5.35,19.27,19.27,0,0,1,1.55,8.07v1.7a3.28,3.28,0,0,1-.82,2.1,3.32,3.32,0,0,1-2,1.2l-6.21,1.09a2.29,2.29,0,0,1-2-.5,2.24,2.24,0,0,1-.82-1.8Z' /%3E%3Cpath class='cls-2' d='M607.61,322V296.1a3.56,3.56,0,0,1,2.79-3.29l6.25-1.1a2.32,2.32,0,0,1,2.79,2.31v65.3a3.25,3.25,0,0,1-.82,2.1,3.19,3.19,0,0,1-2,1.19l-6.25,1.1a2.32,2.32,0,0,1-2.79-2.3v-28.8l-16.39,2.89v28.8a3.56,3.56,0,0,1-2.79,3.29l-6.25,1.1a2.32,2.32,0,0,1-2.79-2.31v-65.3a3.56,3.56,0,0,1,2.79-3.29l6.25-1.1a2.32,2.32,0,0,1,2.79,2.3V324.9Z' /%3E%3Cpath class='cls-2' d='M690.15,346.85a4.9,4.9,0,0,1-.93,2.12,2.91,2.91,0,0,1-1.89,1.18l-11,1.93a2,2,0,0,1-1.89-.51,3.32,3.32,0,0,1-.92-1.79l-9.41-53.54-9.4,56.86a4.86,4.86,0,0,1-.93,2.11,2.91,2.91,0,0,1-1.89,1.18l-11,1.93a2,2,0,0,1-1.89-.51,3.32,3.32,0,0,1-.92-1.79L627.49,294.2a8,8,0,0,1-.24-1.31c0-.35,0-.6,0-.74a2.7,2.7,0,0,1,.63-1.76,2.59,2.59,0,0,1,1.6-.93l5.72-1a2.62,2.62,0,0,1,2.09.48,2.83,2.83,0,0,1,1.12,1.86L647,342.66l8.34-55a4.84,4.84,0,0,1,.92-2.11,2.91,2.91,0,0,1,1.89-1.18l12-2.12a2,2,0,0,1,1.89.51,3.35,3.35,0,0,1,.92,1.79l8.34,52L690,281.69a4.29,4.29,0,0,1,1.12-2.25,3.7,3.7,0,0,1,2.08-1.22l5.72-1a1.85,1.85,0,0,1,1.6.37,1.93,1.93,0,0,1,.64,1.54c0,.14,0,.39-.05.76a11.61,11.61,0,0,1-.25,1.39Z' /%3E%3Cpath class='cls-2' d='M711.56,345.88a2.31,2.31,0,0,1-2.79-2.31v-65.3a3.54,3.54,0,0,1,2.79-3.29l29.79-5.26a2.21,2.21,0,0,1,1.89.52,2.39,2.39,0,0,1,.83,1.91V277a3.35,3.35,0,0,1-.83,2.19,3.16,3.16,0,0,1-1.89,1.19L720.6,284v17.6l17.84-3.14a2.18,2.18,0,0,1,1.89.52,2.43,2.43,0,0,1,.83,1.93v4.74a3.42,3.42,0,0,1-.83,2.22,3.16,3.16,0,0,1-1.89,1.19l-17.84,3.15v21.5l21.24-3.75a2.18,2.18,0,0,1,1.89.52,2.36,2.36,0,0,1,.82,1.9v4.8a3.38,3.38,0,0,1-.82,2.2,3.19,3.19,0,0,1-1.89,1.18Z' /%3E%3Cpath class='cls-2' d='M753.18,270.44a3.26,3.26,0,0,1,.82-2.1,3.22,3.22,0,0,1,2-1.19l6.26-1.11a2.33,2.33,0,0,1,2.79,2.31v65.3a3.3,3.3,0,0,1-.82,2.1,3.22,3.22,0,0,1-2,1.19L756,338.05a2.33,2.33,0,0,1-2.79-2.31Z' /%3E%3Cpath class='cls-2' d='M774.52,326.68a17.52,17.52,0,0,1,.34-4.21,11,11,0,0,1,1.11-2.55l27.26-50-23.86,4.21a2.15,2.15,0,0,1-1.89-.52,2.36,2.36,0,0,1-.83-1.9v-5.3a3.35,3.35,0,0,1,.83-2.19,3.16,3.16,0,0,1,1.89-1.19l35.11-6.19a2.21,2.21,0,0,1,1.89.52,2.36,2.36,0,0,1,.82,1.9v5.2c0,.94,0,1.77-.09,2.52a5.87,5.87,0,0,1-.68,2.22L788.1,321.28l26.47-4.67a2.22,2.22,0,0,1,1.9.52,2.4,2.4,0,0,1,.82,1.91v5.29a3.41,3.41,0,0,1-.82,2.2,3.14,3.14,0,0,1-1.9,1.18l-37.33,6.59a2.22,2.22,0,0,1-1.9-.52,2.36,2.36,0,0,1-.82-1.9Z' /%3E%3Cpath class='cls-3' d='M72,321.11C72,364.22,59.63,373.87,36.4,378,15.28,381.69,2,371.6,2,349.12v-3.37L23,342c-.47,8.72,2.95,17.66,13.86,15.75C51.45,355.18,50,340.83,50,329.8V309.69l-.48.08c-3,10.35-10.25,18.58-20.94,20C.72,334.65,0,293.83,0,273.24c0-19.39-.47-63.13,28.09-68.17,11.65-2,16.77,3.77,21.43,12.53L50,217V203.15l22-3.9ZM36,223.79c-15.08,2.65-13.68,35.47-13.68,44.1,0,9.1-1.4,43.09,14.39,40.31S50.15,274,50.15,264.15,50.16,221.29,36,223.79Z' /%3E%3Cpath class='cls-3' d='M114,206.67l.31-.07c5.11-11.43,12.69-19,24.69-21.14v22.27l-3.67.41C119,211,114,221.26,114,236.58v76.14l-22,3.89V195.69l22-3.85Z' /%3E%3Cpath class='cls-3' d='M176.65,180.83l-.08,75.65c0,10.79-1.42,26.84,13.44,24.21,14.63-2.58,13-16.89,13-27.66V176.15l21.82-3.84,0,81.65c0,24.91-7,42.46-33.72,47.16C159.24,306.73,155,289.07,155,261.55V184.67Z' /%3E%3Cpath class='cls-3' d='M266.83,178.79l.44-.09c4.88-10.68,12.09-17.92,23.7-20,23.21-4.09,23.91,17.09,23.92,35.52l0,83.09L293,281.2V197.62c0-8.39-1.28-18.91-12.89-16.86C265.7,183.29,267,200.08,267,210.39v75.43l-22,3.84V168.74l21.82-3.85Z' /%3E%3Cpath class='cls-3' d='M357,270l-22,3.86V75.09l22-3.84Z' /%3E%3Cpath class='cls-3' d='M373.17,109.52A18.34,18.34,0,0,1,387.8,92.08c7.66-1.35,14.39,4.17,14.39,12.32,0,8.38-6.72,16.26-14.39,17.61C379.68,123.45,373.17,117.89,373.17,109.52ZM398,262.6l-21,3.86V145.53l21-3.85Z' /%3E%3Cpath class='cls-3' d='M418.33,60.35,440,56.5v91.22l.62-.08c4.4-10.11,9.83-17,20.95-19,27.64-4.85,28.38,35.71,28.37,55.85,0,19.6-.43,64-27.62,68.79-12.53,2.22-17.29-3.9-21.71-13.68l-.61.08v15.57l-21.75,3.86Zm49.34,129.46c0-9.82,1.87-42.47-14.39-39.6-14.63,2.58-13.71,35-13.71,44.56s-.92,42.31,13.71,40C469.54,231.64,467.67,199.64,467.67,189.81Z' /%3E%3Cpath class='cls-3' d='M525.7,184.13c0,10.06-.44,37.92,13.72,35.41,11.61-2,13.71-15.57,13.72-24.92l20.19-3.56c0,22.28-9.52,44.3-34.12,48.63-32.76,5.78-35.78-29.6-35.78-55.22,0-24.65,2.79-63.7,35.05-69.4,31.83-5.6,35.51,32,35.51,57v3.57Zm26-20.64c0-9.33,0-30.64-13.23-28.31-13.71,2.42-12.78,23.55-12.78,32.91Z' /%3E%3Cpath class='cls-3' d='M612.59,118.77l.49-.07c5.11-11.43,12.91-19,24.91-21.15v22.26l-3.68.42C618.05,123.1,613,133.33,613,148.68v76.14l-22,3.88V107.78l21.7-3.85Z' /%3E%3Cpath class='cls-3' d='M697,194.38l-.44.1c-4.4,11.31-9,19.06-21.56,21.28-27.16,4.79-27.63-39.44-27.64-59,0-20.13.71-60.94,28.34-65.82,10.23-1.81,16.92,3.48,20.86,11.64l.44-.09V89l21.85-3.85V206.11L697,209.94Zm.76-45.13c0-9.58.94-42.31-13.69-39.73-16.26,2.87-14.41,34.86-14.41,44.69,0,10-1.86,42.7,14.41,39.83C698.69,191.47,697.75,158.83,697.75,149.25Z' /%3E%3Cpath class='cls-3' d='M760.76,198.73,739,202.58V3.85L760.8,0Z' /%3E%3Cpath class='cls-3' d='M799.7,135.82c0,10.07-.48,37.92,13.69,35.42,11.61-2.06,13.7-15.58,13.7-24.92l20.22-3.57c0,22.28-9.52,44.31-34.13,48.64-32.75,5.78-35.77-29.62-35.77-55.23,0-24.65,2.78-63.7,35.06-69.39,31.8-5.61,35.52,32,35.52,57v3.58Zm26-20.63c0-9.35,0-30.65-13.22-28.32-13.71,2.42-12.78,23.56-12.78,32.92Z' /%3E%3Cpath class='cls-4' d='M262.83,60.22c-6.2,1.08-9,.57-16.36,1.82-23.11,3.9-47.37,11.54-60.4,30.57-17.12,25.06-22.75,67.15-40.48,82,11.82-5.59,18.91-19.5,40.11-25.35,16-4.38,32.37-5.32,46.23-18.26C246.1,117.65,253,96.55,256.27,78.74c1.09-7.33,2.35-12.17,6.71-18.55ZM247.6,73.41c-10.24,9.74-26.87,27.38-36,36.52-18.48,18.45-55.1,55.13-55.1,55.13-.2.18-3.93,4.29-4.16,4-.4-.47,3.8-4.52,7-8.08,0,0,35.21-38.69,49.65-53.25,18-18.16,35-33.43,35-33.43C257.94,61.84,261.67,61,261.67,61S256.42,65,247.6,73.41Z' /%3E%3Cpath class='cls-3' d='M6.2,113.57a3.7,3.7,0,0,1-4.47-3.81A5.58,5.58,0,0,1,6.2,104.5a3.64,3.64,0,0,1,4.35,3.72A5.59,5.59,0,0,1,6.2,113.57ZM9,188.5l-6,1V123.77l6-1Z' /%3E%3Cpath class='cls-3' d='M23,120.23v30.18c0,6.53.58,12.85,6.42,11.82s6.58-7.47,6.58-14V118l6-1V152.3c0,8-4.14,14.14-12.5,15.63S17,164.73,17,156.6V121.28Z' /%3E%3Cpath class='cls-3' d='M55.9,118.32A14.77,14.77,0,0,1,65,112.08c8.29-1.45,9,6.29,9,12.86v34.38l-6,1.05V126.63c0-5.72-.23-10-5.15-9.18-6.72,1.19-6.85,8.81-6.85,13.88v31.2l-6,1.05V115.52l5.91-1Z' /%3E%3Cpath class='cls-3' d='M106.71,155.35c0,9-.13,17.41-11.95,19.5C86.59,176.29,83,171.9,83,163.64v-1.76l5-1v.84c0,4.5,1.49,8.32,6.58,7.42,6.65-1.17,6.42-7.07,6.42-12.23v-5.62A11.83,11.83,0,0,1,93.3,156c-11.62,2-11.89-14.5-11.89-23,0-8.07.89-23.86,11.69-25.78a7.66,7.66,0,0,1,7.63,2.7l.26,0v-3.27l5.82-1Zm-11.92-4.63c6.26-1.12,6.55-10.62,6.55-21.12,0-8.81-.55-18.84-7-17.7-4.27.76-6.88,4.22-6.91,21.84C87.42,139,87.34,152,94.79,150.72Z' /%3E%3Cpath class='cls-3' d='M120,128.51v1.41c0,4.78.66,16.26,7.12,15.13,5.18-.92,5.85-8.57,5.84-12.39l6.05-1.08c-.08,7.33-2.84,17.55-11.49,19.07-12.26,2.17-13.88-12.53-13.9-22.17,0-8.64,1.81-25.26,13.09-27.26,10.9-1.92,12.61,12.48,12.61,20.93l.17,2.91ZM133.32,121l-.08-.83c-.18-4.55-.35-14.28-6.54-13.18-5.64,1-6.92,12.1-6.92,16.41Z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E" />
    </div>
  );
}
