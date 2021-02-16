// this code taken from the codeinstitute Django tutorials
function handleEnableDisable(itemId){
    var currentValue = parseInt($(`#id_qty_${itemId}`).val());
    var minusDisabled = currentValue < 2;
    var plusDisabled = currentValue > 98;
    $(`#decrement-qty_${itemId}`).prop('disabled', minusDisabled);
    $(`#increment-qty_${itemId}`).prop('disabled', plusDisabled);
}

var allQtyInputs = $('.qty_input');
for(var i = 0; i < allQtyInputs.length; i++){
    var itemId = $(allQtyInputs[i]).data('item_id');
    handleEnableDisable(itemId);
}

$('.qty_input').change(function(){
    var itemId = $(this).data('item_id');
    handleEnableDisable(itemId);
});

$('.increment-qty').click(function(e){
    e.preventDefault();
    var closestInput = $(this).closest('.input-group').find('.qty_input')[0];
    var currentValue = pareInt($(closestInput).val());
    $(closestInput).val(currentValue + 1);
    var itemId = $(this).data('item_id');
    handleEnableDisable(itemId);
});

$('.decrement-qty').click(function(e){
    e.preventDefault();
    var closestInput = $(this).closest('.input-group').find('.qty_input')[0];
    var currentValue = pareInt($(closestInput).val());
    $(closestInput).val(currentValue - 1);
    var itemId = $(this).data('item_id');
    handleEnableDisable(itemId);
});