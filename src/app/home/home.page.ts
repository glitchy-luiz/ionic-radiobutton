import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  mensagem:string='';

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  verificarRadio() {
    if (this.radioSelecionada==='option1'){
      this.mensagem='voce escolheu a opção 1';
    }else{
      if(this.radioSelecionada==='option2'){
        this.mensagem='você escolheu a opção 2';
      }
      else{
        this.mensagem='você escolheu a opção 3';
      }
    }
    this.exibirToast();
    this.exibirAlerta();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000,
      color:"secondary",
      position:'top'
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplo.',
      message: this.radioSelecionada,
      buttons: ['OK']
    });
    alert.present();
  }

}
