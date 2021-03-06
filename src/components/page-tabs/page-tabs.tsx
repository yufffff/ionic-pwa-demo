import {Component, h} from '@stencil/core';

@Component({
    tag: 'page-tabs',
    styleUrl: 'page-tabs.scss'
})
export class TabsPage {
    render() {
        return [
            <ion-tabs>
                <ion-tab tab="tab-home">
                    <ion-nav />
                </ion-tab>
                <ion-tab tab="tab-message">
                    <ion-nav />
                </ion-tab>
                <ion-tab tab="tab-user">
                    <ion-nav />
                </ion-tab>
                <ion-tab tab="tab-setting">
                    <ion-nav />
                </ion-tab>

                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="tab-home">
                        <ion-icon name="home"/>
                        <ion-label>ホーム</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-message">
                        <ion-icon name="mail"/>
                        <ion-label>メッセージ</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-user">
                        <ion-icon name="people"/>
                        <ion-label>ユーザー</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-setting">
                        <ion-icon name="settings"/>
                        <ion-label>設定</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        ];
    }
}