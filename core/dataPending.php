<?php
    include("quotesPending.php");
?>

<h2>quotes van makkers</h2>
<table>
    <tr>
        <th>Quote</th>
        <th>Maker</th>
        <th>Ja of nee</th>
    </tr>
    <?php
    foreach ($quotes as $f_quote) { ?>
        <tr>
            <td  id="s_quote" class="tb_box"><?= $f_quote["quote"]?></td>
            <td id="s_maker"class="tb_box"><?= $f_quote["maker"]?></td>
            <td><button onclick="transfer(true, <?= $f_quote['id']; ?>)" id="CPbtn_V" class="CPbtn"><i class="fas fa-check"></i></button><button onclick="transfer(false, <?= $f_quote['id']; ?>)" id="CPbtn_X" class="CPbtn"><i class="fas fa-times"></i></button></td>
        </tr>
    <?php }?>
</table>
