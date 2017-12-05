import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PWAService {

  constructor(private http: Http) {
  }

  init() {
    let request = this.http.get('/api/site_info');
    request.subscribe((response: Response) => {
      let data = response.json();
      if (response.status === 200 && data) {
        document.getElementById('pwa-icon');
        let icon = <HTMLLinkElement>document.querySelector('link[rel="icon"]');
        let apple_icon = <HTMLLinkElement>document.querySelector('link[rel="apple-touch-icon"]');
        icon.href = apple_icon.href = this.getIconForText(data.site_name, data.theme_palette.link);
      }
    });
    return request;
  }

  getIconForText(text, color) {
    let canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    let ctx = canvas.getContext('2d');
    ctx.font = 'bold 450px Helvetica';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 10;
    ctx.fillText(text[0], 256, 400);
    return canvas.toDataURL();
  }

}
