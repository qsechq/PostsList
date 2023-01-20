<?
class Telegramm
{
    private $config = [
        'tg_chat' => '-873263578',
        'bot_token' => '5697926616:AAFO8FDlacAjhwVs7_qB8RPL20hnx0CCSv8',
    ];
    private $post = [];
    public function __construct($post)
    {
        $this->post = $post;
    }
    private function send($tg_id, $text)
    {
        $params = array(
            'chat_id' => $tg_id,
            'text' => $text,
            'parse_mode' => 'HTML',
        );
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot' . $this->config['bot_token'] . '/sendMessage');
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);

        $result = curl_exec($curl);
        curl_close($curl);
        // echo json_encode(json_decode($result)->ok);
        echo $result;
    }
    public function processingRequest()
    {
        $tg_id = $this->config['tg_chat'];
        $text = "Поступила заявка на обратный звонок \n" . 'test' . "\n" . '+' . 'test';
        switch ($this->post['action']) {
            case '1-room':
                $text .= "\nЗаявка с формы \"Студия/Однокомнатная квартира\"";
                break;
            case '2-room':
                $text .= "\nЗаявка с формы \"Двухкомнатная  квартира\"";
                break;
        }
        $this->send($tg_id, $text);
    }
}

// if ($recaptcha->success == true) {
//     $telegramm = new Telegramm($_POST);
//     $telegramm->processingRequest();
// } else {
//     print_r($recaptcha);
// }
